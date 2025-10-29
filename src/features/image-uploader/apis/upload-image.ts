'use client'

import { Err, SafePromiseResult } from '@/shared/safe-result'

import { ImageFileDto, ImageMetaDto } from '../dto'

const path = '/api/upload/image'

export async function uploadImage(
  data: ImageFileDto.SaveImageFileRequest
): SafePromiseResult<ImageMetaDto.UpdateImageMetaRequest, string> {
  const fromData = new FormData()

  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined) {
      fromData.append(key, value)
    }
  })

  try {
    const response = await fetch(path, {
      method: 'POST',
      body: fromData,
    })

    if (!response.ok) {
      return Err(`Upload failed with status ${response.status}: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    return Err((error as Error).message)
  }
}
