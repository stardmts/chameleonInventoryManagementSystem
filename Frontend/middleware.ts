import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {

    const token = false;

    const { pathname } = request.nextUrl;

    if (pathname === '/') {
        return NextResponse.next();
    }

    if (pathname.startsWith('/signIn')) {

        if (token) {
            return NextResponse.redirect(new URL('/homePage', request.url));
        }

        return NextResponse.next();

    }

    if (!token) {

        return NextResponse.redirect(new URL('/signIn', request.url));

    }

    return NextResponse.next();

}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|css|js|woff|woff2)$).*)',
    ]
};
