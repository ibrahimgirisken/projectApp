// middleware.ts
import {NextRequest, NextResponse} from 'next/server';
import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

// i18n middleware
const intlMiddleware = createMiddleware(routing);

// Edge-safe base64 decode (Buffer’sız)
function parseExp(token?: string): number | null {
  try {
    if (!token) return null;
    const [, payload] = token.split('.');
    const json = JSON.parse(
      // atob + URL-safe replace
      decodeURIComponent(
        atob(payload.replace(/-/g, '+').replace(/_/g, '/'))
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      )
    );
    return typeof json.exp === 'number' ? json.exp : null;
  } catch {
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const {pathname, search} = request.nextUrl;

  // i18n dışındaki özel yollar
  if (pathname === '/login' || pathname.match(/^\/(tr|en|de)\/login$/)) {
    return NextResponse.next();
  }

  // admin koruması (locale'li ve localesiz)
  if (pathname.startsWith('/admin') || /^\/(tr|en|de)\/admin(\/|$)/.test(pathname)) {
    const at = request.cookies.get('accessToken')?.value;
    const rt = request.cookies.get('refreshToken')?.value;

    if (!at) {
      if (rt) {
        const ok = await fetch(new URL('/api/refresh', request.url), {
          method: 'POST',
          cache: 'no-store'
        }).then(r => r.ok).catch(() => false);
        if (ok) return NextResponse.next();
      }
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = '/login';
      loginUrl.searchParams.set('callbackUrl', pathname + search);
      return NextResponse.redirect(loginUrl);
    }

    const exp = parseExp(at);
    const now = Math.floor(Date.now() / 1000);
    if (exp && exp < now + 15) {
      const ok = await fetch(new URL('/api/refresh', request.url), {
        method: 'POST',
        cache: 'no-store'
      }).then(r => r.ok).catch(() => false);
      if (!ok) {
        const loginUrl = request.nextUrl.clone();
        loginUrl.pathname = '/login';
        loginUrl.searchParams.set('callbackUrl', pathname + search);
        return NextResponse.redirect(loginUrl);
      }
    }
    return NextResponse.next();
  }

  // i18n middleware en sonda
  return intlMiddleware(request);
}

// matcher: locale’li path’leri de kapsa
export const config = {
  matcher: [
    '/admin/:path*',
    '/(tr|en|de)/admin/:path*',
    '/login',
    '/(tr|en|de)/login',
    // next-intl önerilen “her şey” kuralı:
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
