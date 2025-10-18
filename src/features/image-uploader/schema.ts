// src/features/image-uploader/schema.ts
import { z } from 'zod'

export const UploadedImageRequestSchema = z.object({
  domain: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  path: z.string(),
  hashedFilename: z.string(),
})
export type UploadedImageRequest = z.infer<typeof UploadedImageRequestSchema>

export const UploadedImageResponseSchema = z.object({
  domain: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  path: z.string(),
  hashedFilename: z.string(),
})
export type UploadedImageResponse = z.infer<typeof UploadedImageResponseSchema>
