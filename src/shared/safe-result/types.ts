export type SafeResult<T, E = unknown> = { ok: true; value: T } | { ok: false; error: E }

export type SafePromiseResult<T, E = unknown> = Promise<SafeResult<T, E>>
