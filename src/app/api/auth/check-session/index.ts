import { NextRequest } from 'next/server';

import { CheckSessionResponse } from './model';

export async function checkSession(): Promise<boolean>;
export async function checkSession(req: NextRequest): Promise<boolean>;
export async function checkSession(req?: NextRequest): Promise<boolean> {
  const url = req
    ? new URL('/api/auth/check-session', req.url) // absolute URL in middleware
    : '/api/auth/check-session';

  const init: RequestInit = req
    ? {
        headers: {
          cookie: req.headers.get('cookie') ?? '', // forward cookie from middleware request
        },
      }
    : {
        credentials: 'include', // include cookie on client-side request
      };

  try {
    const res = await fetch(url.toString(), init);
    if (!res.ok) return false;

    const data: CheckSessionResponse = await res.json();
    return data.valid;
  } catch {
    return false;
  }
}
