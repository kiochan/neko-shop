import 'server-only'

import { PrismaClient } from '@prisma/client'

const globalAny = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalAny.prisma ??
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') {
  globalAny.prisma = prisma
}
