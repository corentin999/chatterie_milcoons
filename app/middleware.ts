import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const ADMIN_PREFIX = '/admin';

export function middleware(req: NextRequest) {
  const isAdmin = req.nextUrl.pathname.startsWith(ADMIN_PREFIX);
  if (!isAdmin) return;

  const token = req.cookies.get(process.env.JWT_COOKIE_NAME || 'token')?.value;
  const isLogin = req.nextUrl.pathname.startsWith('/admin/login');

  if (!token && !isLogin) {
    const url = req.nextUrl.clone();
    url.pathname = '/admin/login';
    url.searchParams.set('redirect', req.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  if (token && isLogin) {
    // Déjà logué → redirige vers /admin/cats
    const url = req.nextUrl.clone();
    url.pathname = '/admin/cats';
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ['/admin/:path*'],
};
