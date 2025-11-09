import { NextRequest, NextResponse } from 'next/server'

import { checkSession } from './features/auth'

const AUTH_PAGES = ['/login', '/register'] as const
const PROTECTED_PAGES = ['/dashboard', '/logout'] as const

function requestMatchPaths(req: NextRequest, paths: readonly string[]) {
  return paths.some((p) => req.nextUrl.pathname.startsWith(p))
}

async function isAlreadyLogin(req: NextRequest): Promise<boolean> {
  const res = await checkSession(req)
  return res.ok && res.value.valid
}

async function notAlreadyLogin(req: NextRequest): Promise<boolean> {
  return !(await isAlreadyLogin(req))
}

export async function middleware(req: NextRequest) {
  if (requestMatchPaths(req, PROTECTED_PAGES) && (await notAlreadyLogin(req))) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (requestMatchPaths(req, AUTH_PAGES) && (await isAlreadyLogin(req))) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*'],
}
