import { cookies } from 'next/headers'

import { prisma } from '@/shared/prisma'

export async function createContext() {
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get('session')?.value ?? null

  let userId: number | null = null

  if (sessionToken) {
    const session = await prisma.session.findUnique({
      where: { id: sessionToken },
      select: { userId: true },
    })
    userId = session?.userId ?? null
  }

  return {
    prisma,
    userId,
  }
}

export type Context = Awaited<ReturnType<typeof createContext>>
