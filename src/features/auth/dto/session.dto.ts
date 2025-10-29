import { z } from 'zod'

export const CheckSessionRequestZod = z.object({
  sessionId: z.string(),
})
export type CheckSessionRequest = z.infer<typeof CheckSessionRequestZod>

export const CheckSessionResponseZod = z.object({
  valid: z.boolean(),
})
export type CheckSessionResponse = z.infer<typeof CheckSessionResponseZod>
