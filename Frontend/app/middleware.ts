/*
    import { NextResponse } from 'next/server';
    import type { NextRequest } from 'next/server';

    export function middleware(request: NextRequest) {
    // 1. Get the session cookie (change 'session_token' to match your auth cookie name)
    const token = request.cookies.get('session_token')?.value;
    
    const { pathname } = request.nextUrl;

    // 2. Allow requests to the sign-in page without a token
    if (pathname.startsWith('/signIn')) {
        // If they have a token already, redirect them away from the sign-in page to home
        if (token) {
        return NextResponse.redirect(new URL('/', request.url));
        }
        return NextResponse.next();
    }

    // 3. If there is no token and they aren't on the sign-in page, block access
    if (!token) {
        return NextResponse.redirect(new URL('/signIn', request.url));
    }

    return NextResponse.next();
    }

    // 4. Configure which routes this middleware applies to
    export const config = {
    matcher: [
        /*
        * Match all paths except internal Next.js assets and metadata:
        * - _next/static (static files)
        * - _next/image (image optimization files)
        * - favicon.ico, icon.svg, apple-icon.png (image assets visible in your app root)
        '/((?!_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png).*)',
    ],
    };
*/
