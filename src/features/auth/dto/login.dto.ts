import { z } from 'zod'

export const LoginRequestZod = z.object({
  email: z.email({ message: 'E-mail format is invalid' }),
  password: z.string().min(1, { message: 'Password must be not empty' }),
})
export type LoginRequest = z.infer<typeof LoginRequestZod>
