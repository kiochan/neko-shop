'use server'

import { randomUUID } from 'crypto'

import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { LoginPayload } from '@/definitions/payload/auth.model'
import { prisma } from '@/lib/prisma'

import { SESSION_COOKIE_NAME, SESSION_DURATION_DAYS } from './auth.const'

export async function login(data: LoginPayload) {
  const email = data.email
  const password = data.password

  if (!email || !password) {
    return { error: 'Missing email or password' }
  }

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    return { error: 'Invalid email or password' }
  }

  const isValid = await bcrypt.compare(password, user.passwordHash)
  if (!isValid) {
    return { error: 'Invalid email or password' }
  }

  const sessionId = randomUUID()
  const SevenDaysInMs = SESSION_DURATION_DAYS * 24 * 60 * 60 * 1000
  const expiresAt = new Date(Date.now() + SevenDaysInMs)

  await prisma.session.create({
    data: {
      id: sessionId,
      userId: user.id,
      expiresAt,
    },
  })

  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE_NAME, sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    expires: expiresAt,
  })

  redirect('/dashboard')
}

export async function logout() {
  const cookieStore = await cookies()
  const sessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value

  if (sessionId) {
    await prisma.session.deleteMany({
      where: { id: sessionId },
    })

    cookieStore.set(SESSION_COOKIE_NAME, '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      expires: new Date(0),
    })
  }

  redirect('/')
}
