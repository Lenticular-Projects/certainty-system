import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Skip IP check in local development
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next()
  }

  const allowedIPs = (process.env.ALLOWED_IPS ?? '')
    .split(',')
    .map(ip => ip.trim())
    .filter(Boolean)

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.ip ??
    ''

  if (!allowedIPs.includes(ip)) {
    return NextResponse.redirect(new URL('/blocked', request.url))
  }

  return NextResponse.next()
}

export const config = {
  // Run on all routes except the blocked page itself and static assets
  matcher: ['/((?!blocked|_next/static|_next/image|favicon.ico).*)'],
}
