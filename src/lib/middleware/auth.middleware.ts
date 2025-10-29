import { NextRequest, NextResponse } from 'next/server'

import { checkSession } from '@/features/auth'

async function protectDashboard(req: NextRequest) {
  const isDashboard = req.nextUrl.pathname.startsWith('/dashboard')
  if (!isDashboard) return null

  const res = await checkSession(req)
  if (!res.ok || !res.value.valid) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return null
}

async function preventMultiLogin(req: NextRequest) {
  const isLogin = req.nextUrl.pathname.startsWith('/login')
  if (!isLogin) return null

  const res = await checkSession(req)

  if (res.ok && res.value.valid) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return null
}

export async function authMiddleware(req: NextRequest) {
  return (await protectDashboard(req)) ?? (await preventMultiLogin(req)) ?? NextResponse.next()
}
