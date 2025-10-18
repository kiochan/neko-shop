'use client'

import { useState, useTransition } from 'react'

import { saveUploadedImageAction } from './actions'
import { UploadImageRoutePath } from './routes'
import { UploadedImageResponse } from './schema'

export function useImageUpload() {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const [uploaded, setUploaded] = useState<UploadedImageResponse | null>(null)
  const [progress, setProgress] = useState<number>(0)

  async function upload(
    file: File,
    options: { domain: string; name?: string; description?: string }
  ) {
    setError(null)
    setUploaded(null)
    setProgress(0)

    const formData = new FormData()
    formData.append('file', file)
    formData.append('domain', options.domain)
    if (options.name) formData.append('name', options.name)
    if (options.description) formData.append('description', options.description)

    startTransition(async () => {
      try {
        const xhr = new XMLHttpRequest()
        const uploadPromise = new Promise<UploadedImageResponse>((resolve, reject) => {
          xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
              setProgress(Math.round((event.loaded / event.total) * 100))
            }
          }

          xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
              resolve(JSON.parse(xhr.responseText))
            } else {
              reject(new Error('Upload failed'))
            }
          }

          xhr.onerror = () => reject(new Error('Upload failed'))
          xhr.open('POST', UploadImageRoutePath)
          xhr.send(formData)
        })

        const json = await uploadPromise

        const saveResult = await saveUploadedImageAction({
          domain: json.domain,
          name: json.name,
          description: json.description,
          path: json.path,
          hashedFilename: json.hashedFilename,
        })

        if (!saveResult.ok) throw saveResult.error
        setUploaded(saveResult.value)
        setProgress(100)
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Upload failed')
      }
    })
  }

  return { upload, isPending, uploaded, error, progress }
}
