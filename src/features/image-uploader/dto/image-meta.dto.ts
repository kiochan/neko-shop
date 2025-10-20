import { z } from 'zod'

export const UpdateImageMetaRequestZod = z.object({
  domain: z.string(),
  name: z.string(),
  description: z.string().optional(),
  path: z.string(),
  hashedFilename: z.string(),
})
export type UpdateImageMetaRequest = z.infer<typeof UpdateImageMetaRequestZod>

export const UpdateImageMetaResponseZod = z.object({
  domain: z.string(),
  name: z.string(),
  description: z.string().optional(),
  path: z.string(),
  hashedFilename: z.string(),
})
export type UpdateImageMetaResponse = z.infer<typeof UpdateImageMetaResponseZod>
