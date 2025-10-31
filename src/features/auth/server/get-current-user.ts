import 'server-only'

import { cookies } from 'next/headers'

import { SESSION_COOKIE_NAME } from '@/features/auth/const'
import { prisma } from '@/shared/prisma'

export async function getCurrentUser() {
  const cookieStore = await cookies()
  const sessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value
  if (!sessionId) return null

  const session = await prisma.session.findUnique({
    where: { id: sessionId },
    include: { user: true },
  })

  if (!session || session.expiresAt < new Date()) return null

  return session.user
}
