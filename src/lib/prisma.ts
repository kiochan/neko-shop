// lib/prisma.ts
import { PrismaClient } from '@/generated/prisma/client';

declare global {
  // Let TypeScript know that a prisma instance might be attached to global
  // Prevent multiple instances being created during hot-reloading in development
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}
