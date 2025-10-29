import { NextRequest } from 'next/server'

import { Err, Ok, SafePromiseResult } from '@/shared/safe-result'

import { CheckSessionResponse } from '../dto/session.dto'

const path = '/api/auth/check-session'

export async function checkSession(): SafePromiseResult<CheckSessionResponse, string>
export async function checkSession(
  req: NextRequest
): SafePromiseResult<CheckSessionResponse, string>
export async function checkSession(
  req?: NextRequest
): SafePromiseResult<CheckSessionResponse, string> {
  const url = req
    ? new URL(path, req.url) // absolute URL in middleware
    : path

  const init: RequestInit = req
    ? {
        headers: {
          cookie: req.headers.get('cookie') ?? '', // forward cookie from middleware request
        },
      }
    : {
        credentials: 'include', // include cookie on client-side request
      }

  try {
    const res = await fetch(url.toString(), init)
    if (!res.ok) return Err('Connection errors')

    const data = (await res.json()) as CheckSessionResponse
    return Ok(data)
  } catch {
    return Err('Connection errors')
  }
}
