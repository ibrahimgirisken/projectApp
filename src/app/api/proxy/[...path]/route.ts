import { cookies, headers } from 'next/headers';
import { NextResponse } from 'next/server';

const BACKEND_BASE = process.env.BACKEND_API_URL ?? 'http://localhost:5070/api';

async function forwardOnce(req: Request, method: string, path: string[]) {
  const url = new URL(req.url);
  const target = `${BACKEND_BASE}/${path.join('/')}${url.search}`;

const body =
  method === 'GET' || method === 'HEAD'
    ? undefined
    : Buffer.from(await req.arrayBuffer());
  const token = (await cookies()).get('accessToken')?.value;

  const h = new Headers();
  const ct = req.headers.get('content-type');
  if (ct) h.set('Content-Type', ct);
  if (token) h.set('Authorization', `Bearer ${token}`);

  const inc = await headers();
  const accept = inc.get('accept');
  if (accept) h.set('accept', accept);

  return fetch(target, {
    method,
    headers: h,
    body: body ? Buffer.from(body) : undefined,
    cache: 'no-store',
  });
}

async function tryRefresh(req: Request) {
  const r = await fetch(new URL('/api/refresh', req.url), { method: 'POST', cache: 'no-store' });
  return r.ok;
}

type Ctx = { params: Promise<{ path: string[] }> };

async function handle(req: Request, ctx: Ctx, method: string) {
  const { path } = await ctx.params;

  let resp = await forwardOnce(req, method, path);
  if (resp.status !== 401) {
    return new Response(await resp.arrayBuffer(), { status: resp.status, headers: resp.headers });
  }

  const refreshed = await tryRefresh(req);
  if (!refreshed) {
    const accept = req.headers.get('accept') ?? '';
    const res = accept.includes('text/html')
      ? NextResponse.redirect(new URL('/login', req.url))
      : NextResponse.json({ error: 'unauthorized' }, { status: 401 });

    res.cookies.set('accessToken', '', {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 0,
    });
    res.cookies.set('refreshToken', '', {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 0,
    });
    return res;
  }

  resp = await forwardOnce(req, method, path);
  return new Response(await resp.arrayBuffer(), { status: resp.status, headers: resp.headers });
}

export async function GET(req: Request, ctx: Ctx) {
  return handle(req, ctx, 'GET');
}
export async function POST(req: Request, ctx: Ctx) {
  return handle(req, ctx, 'POST');
}
export async function PUT(req: Request, ctx: Ctx) {
  return handle(req, ctx, 'PUT');
}
export async function PATCH(req: Request, ctx: Ctx) {
  return handle(req, ctx, 'PATCH');
}
export async function DELETE(req: Request, ctx: Ctx) {
  return handle(req, ctx, 'DELETE');
}
