// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

function parseExp(token?: string): number | null {
  try {
    if (!token) return null;
    const [, payload] = token.split('.');
    const json = JSON.parse(
      Buffer.from(payload.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8')
    );
    return typeof json.exp === 'number' ? json.exp : null;
  } catch {
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname === '/login') return NextResponse.next();

  if (pathname.startsWith('/admin')) {
    const at = request.cookies.get('accessToken')?.value;
    const rt = request.cookies.get('refreshToken')?.value;

    // access yoksa → refresh varsa dene
    if (!at) {
      if (rt) {
        const ok = await fetch(new URL('/api/refresh', request.url), {
          method: 'POST',
          cache: 'no-store',
        })
          .then((r) => r.ok)
          .catch(() => false);
        if (ok) return NextResponse.next();
      }
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = '/login';
      loginUrl.searchParams.set('callbackUrl', pathname + search);
      return NextResponse.redirect(loginUrl);
    }

    // access var ama süresi geçmişse / bitmek üzereyse → refresh dene
    const exp = parseExp(at);
    const now = Math.floor(Date.now() / 1000);
    if (exp && exp < now + 15) {
      // 15 sn'den az kaldıysa
      const ok = await fetch(new URL('/api/refresh', request.url), {
        method: 'POST',
        cache: 'no-store',
      })
        .then((r) => r.ok)
        .catch(() => false);
      if (!ok) {
        const loginUrl = request.nextUrl.clone();
        loginUrl.pathname = '/login';
        loginUrl.searchParams.set('callbackUrl', pathname + search);
        return NextResponse.redirect(loginUrl);
      }
    }

    return NextResponse.next();
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/admin/:path*', '/login', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
