export type SafeResult<T, E extends Error = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E }

export type SafePromiseResult<T, E extends Error = Error> = Promise<SafeResult<T, E>>
