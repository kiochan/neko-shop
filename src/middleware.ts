import type { NextRequest } from 'next/server'

import { authMiddleware } from '@/lib/middleware/auth.middleware'

export function middleware(req: NextRequest) {
  return authMiddleware(req)
}

export const config = {
  matcher: ['/login', '/dashboard/:path*'],
}
