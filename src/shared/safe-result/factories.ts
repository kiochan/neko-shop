export function Ok<T>(value: T): { ok: true; value: T } {
  return { ok: true, value }
}

export function Err<E extends Error>(error: E): { ok: false; error: E } {
  return { ok: false, error }
}
