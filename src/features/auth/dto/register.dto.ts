import { z } from 'zod'

export const RegisterRequestZod = z
  .object({
    username: z.string().min(1, { message: 'Username must not be empty' }),
    email: z.email({ message: 'E-mail format is invalid' }),
    dob: z.string().optional(),
    password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
    confirmPassword: z.string(),
    agree: z.boolean().refine((v) => v === true, { message: 'You must agree to the terms' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type RegisterRequest = z.infer<typeof RegisterRequestZod>
