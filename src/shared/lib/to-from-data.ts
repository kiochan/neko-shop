export function toFormData<T extends object>(data: T): FormData {
  const form = new FormData()
  for (const [key, value] of Object.entries(data)) {
    if (value !== undefined && value !== null) {
      form.append(key, value)
    }
  }
  return form
}
