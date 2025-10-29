'use client'

import { Upload, ImagePlus, RefreshCcw } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'

import { Button } from '@/shared/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'
import { Progress } from '@/shared/ui/progress'

import { UiText } from './constants'
import { ImageMetaDto } from './dto'
import { useImageUpload } from './hooks'

export type ImageUploaderProps = {
  domain: string
  uploaded?: (meta: ImageMetaDto.UpdateImageMetaResponse) => void
}

export function ImageUploader({ domain }: { domain: string }) {
  const fileInput = useRef<HTMLInputElement | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const { startUpload, isPending, result, error } = useImageUpload()

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setPreview(URL.createObjectURL(file))
    startUpload(file, { domain })
  }

  return (
    <Card className="max-w-sm w-full mx-auto ">
      <CardHeader>
        <CardTitle className="text-center text-lg">{UiText.title}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-center gap-4">
        {/* Real input button */}
        <input
          type="file"
          accept="image/*"
          ref={fileInput}
          onChange={handleFileChange}
          className="hidden"
        />

        {!preview && (
          <Button
            variant="default"
            onClick={() => fileInput.current?.click()}
            disabled={isPending}
            className="gap-2"
          >
            {isPending ? (
              <>
                <Upload className="w-4 h-4 animate-pulse" />
                {UiText.uploading}
              </>
            ) : (
              <>
                <ImagePlus className="w-4 h-4" />
                {UiText.selectButton}
              </>
            )}
          </Button>
        )}

        {preview && (
          <div className="flex flex-col items-center gap-3">
            <div className="relative w-48 h-48 rounded-xl overflow-hidden border bg-muted">
              <Image src={preview} alt="preview" fill className="object-cover" />
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => fileInput.current?.click()}
              className="gap-1 text-gray-600 hover:text-gray-900"
            >
              <RefreshCcw className="w-4 h-4" />
              {UiText.reselect}
            </Button>
          </div>
        )}

        {isPending && (
          <div className="w-full">
            <Progress value={result ? 100 : 60} className="h-2 rounded-full" />
          </div>
        )}

        {error && (
          <p className="text-sm text-red-600">
            {UiText.error} {error}
          </p>
        )}

        {result && (
          <p className="text-sm text-green-600">
            {UiText.success} <span className="font-medium">{result.name}</span>
          </p>
        )}
      </CardContent>
    </Card>
  )
}
