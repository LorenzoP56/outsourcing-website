import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse } from 'next/server';
import { clerkMiddleware } from '@clerk/nextjs/server';

const intlMiddleware = createMiddleware(routing);

// Route protection is resource-based (auth.protect() inside each page/layout),
// not middleware path-matching — see account/checkout/orders layouts once built.
// clerkMiddleware still needs to run on every request: it's what makes auth()
// and auth.protect() available downstream in pages and route handlers.
export default clerkMiddleware((_auth, request) => {
  // Clerk needs to see /api and /trpc requests, but next-intl doesn't know
  // how to route them (no locale prefix) — let those pass through untouched.
  if (request.nextUrl.pathname.startsWith('/api') || request.nextUrl.pathname.startsWith('/trpc')) {
    return NextResponse.next();
  }

  if (request.nextUrl.pathname === '/en/blog') {
    return NextResponse.redirect(new URL('/it/blog', request.url), { status: 302 });
  }

  return intlMiddleware(request);
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for Clerk's auto-proxy path
    '/__clerk/:path*',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};