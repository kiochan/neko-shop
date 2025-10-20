import { z } from 'zod'
import { zfd } from 'zod-form-data'

import { ImageMetaDto } from '.'

export const SaveImageFileRequestZod = zfd.formData({
  domain: z.string(),
  name: z.string(),
  description: z.string().optional(),
  file: z.file(),
})
export type SaveImageFileRequest = z.infer<typeof SaveImageFileRequestZod>

export const SaveImageFileResponseZod = ImageMetaDto.UpdateImageMetaRequestZod
export type SaveImageFileResponse = z.infer<typeof SaveImageFileResponseZod>
