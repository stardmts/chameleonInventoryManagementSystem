
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {

    const { pathname } = request.nextUrl;

    // Let API requests reach the Spring Boot backend.
    // Backend Spring Security handles API authentication.
    if (pathname.startsWith('/api/')) {
        return NextResponse.next();
    }

    const token = request.cookies.get('AUTH_TOKEN')?.value;

    // Allow homepage
    if (pathname === '/') {
        return NextResponse.next();
    }

    // Handle sign-in page
    if (pathname === '/signIn') {

        if (token) {
            return NextResponse.redirect(
                new URL('/homePage', request.url)
            );
        }

        return NextResponse.next();
    }

    // Protect frontend pages
    if (!token) {
        return NextResponse.redirect(
            new URL('/signIn', request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|_next/webpack-hmr|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|css|js|woff|woff2|webmanifest)$).*)',
    ],
};
