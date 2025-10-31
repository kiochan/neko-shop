'use server'

import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'

import { prisma } from '@/shared/prisma'
import { Err, Ok, SafePromiseResult } from '@/shared/safe-result'

import { SESSION_COOKIE_NAME, SESSION_DURATION_DAYS } from '../const'
import { RegisterDto } from '../dto'

type ErrorType = 'EMAIL_ALREADY_REGISTERED' | 'SERVER_ERROR'

export async function registerAction(
  data: RegisterDto.RegisterRequest
): SafePromiseResult<object, ErrorType> {
  try {
    const existing = await prisma.user.findUnique({
      where: { email: data.email },
    })

    if (existing) {
      return Err('EMAIL_ALREADY_REGISTERED')
    }

    const passwordHash = await bcrypt.hash(data.password, 10)

    const user = await prisma.user.create({
      data: {
        email: data.email,
        name: data.username,
        passwordHash,
      },
    })

    const sessionId = crypto.randomUUID()
    const expiresAt = new Date(Date.now() + SESSION_DURATION_DAYS * 24 * 60 * 60 * 1000)

    await prisma.session.create({
      data: { id: sessionId, userId: user.id, expiresAt },
    })

    const cookieStore = await cookies()
    cookieStore.set(SESSION_COOKIE_NAME, sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      expires: expiresAt,
    })

    return Ok({})
  } catch {
    return Err('SERVER_ERROR')
  }
}
