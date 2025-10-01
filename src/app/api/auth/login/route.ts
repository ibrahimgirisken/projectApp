import { NextRequest, NextResponse } from 'next/server';

function parseJwtExpSec(token?: string): number | null {
  try {
    if (!token) return null;
    const [, payload] = token.split('.');
    const b64 = payload.replace(/-/g, '+').replace(/_/g, '/');
    const data = JSON.parse(Buffer.from(b64, 'base64').toString('utf8'));
    return typeof data.exp === 'number' ? data.exp : null; // seconds
  } catch {
    return null;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const loginRes = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/Auth/Login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      cache: 'no-store',
    });

    if (!loginRes.ok) {
      const errorData = await loginRes.json().catch(() => ({}));
      return NextResponse.json({ error: errorData?.message || 'Invalid login' }, { status: 401 });
    }

    const data = await loginRes.json();

    const accessToken: string | undefined = data?.token?.accessToken;
    const refreshToken: string | undefined = data?.token?.refreshToken;

    if (!accessToken) {
      return NextResponse.json({ error: 'Token alınamadı' }, { status: 500 });
    }

    // Token expirations (opsiyonel)
    const nowSec = Math.floor(Date.now() / 1000);
    const accessExp = parseJwtExpSec(accessToken);
    const refreshExp = parseJwtExpSec(refreshToken);

    const res = NextResponse.json({ message: 'Login successful' });

    // Access cookie (kısa ömürlü)
    res.cookies.set('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      ...(accessExp
        ? { maxAge: Math.max(0, accessExp - nowSec), expires: new Date(accessExp * 1000) }
        : { maxAge: 60 * 60 }), // fallback: 1 saat
    });

    // Refresh cookie (uzun ömürlü) — refreshToken varsa yaz
    if (refreshToken) {
      res.cookies.set('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        ...(refreshExp
          ? { maxAge: Math.max(0, refreshExp - nowSec), expires: new Date(refreshExp * 1000) }
          : { maxAge: 60 * 60 * 24 }), // fallback: 1 gün
      });
    }

    return res;
  } catch (err) {
    console.error('Login API hatası:', err);
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 });
  }
}
