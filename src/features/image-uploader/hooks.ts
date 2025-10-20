'use client'

import { useState, useTransition } from 'react'

import { updateImageMetaAction } from './actions'
import { UploadImage } from './apis'
import { ImageMetaDto } from './dto'

export function useImageUpload() {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const [result, setUploaded] = useState<ImageMetaDto.UpdateImageMetaResponse | null>(null)

  async function startUpload(
    file: File,
    options: { domain: string; name?: string; description?: string }
  ) {
    setError(null)
    setUploaded(null)

    startTransition(async () => {
      try {
        const uploadImageResponse = await UploadImage.api.methods.upload({
          file: file,
          domain: options.domain,
          name: options.name ?? file.name,
          description: options.description,
        })

        if (!uploadImageResponse.ok) throw new Error(uploadImageResponse.error)

        const imageMeta = uploadImageResponse.value

        const saveResult = await updateImageMetaAction(imageMeta)

        if (!saveResult.ok) throw saveResult.error

        setUploaded(saveResult.value)
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Upload failed')
      }
    })
  }

  return { startUpload, isPending, result, error }
}
