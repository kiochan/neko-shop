'use server'

import { Err, Ok, SafePromiseResult } from '@/shared/safe-result'

import { UploadedImageRequestSchema, UploadedImageRequest, UploadedImageResponse } from './schema'
import { saveUploadedImageService } from './service'

export async function saveUploadedImageAction(
  input: UploadedImageRequest
): SafePromiseResult<UploadedImageResponse> {
  const parsed = UploadedImageRequestSchema.safeParse(input)
  if (!parsed.success) return Err(parsed.error)

  try {
    const data = await saveUploadedImageService(parsed.data)
    return Ok(data)
  } catch (error) {
    return Err(error as Error)
  }
}
