import { NextResponse } from 'next/server';

export async function POST() {
  const res = NextResponse.json({ ok: true });
  for (const name of ['accessToken', 'refreshToken']) {
    res.cookies.set(name, '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 0,
    });
  }
  return res;
}
