import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(req, res) {

    let cookie = req.cookies.get('logedIn')?.value
    if (!cookie) {
        return NextResponse.redirect(new URL('/login', req.url))
    }


}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/admin/:path*',
}