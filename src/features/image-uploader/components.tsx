'use client'

import { Upload, ImagePlus, RefreshCcw } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

import { useImageUpload } from './hooks'

// ========================
// UI TEXT CONSTANTS
// ========================
const UI_TEXT = {
  title: 'Image Upload',
  selectButton: 'Select Image',
  uploading: 'Uploading…',
  reselect: 'Change Image',
  success: 'Upload successful:',
  error: 'Upload failed:',
}

export function ImageUploader({ domain }: { domain: string }) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const { upload, isPending, uploaded, error, progress } = useImageUpload()

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setPreview(URL.createObjectURL(file))
    upload(file, { domain })
  }

  return (
    <Card className="max-w-sm w-full mx-auto border-muted shadow-md rounded-2xl">
      <CardHeader>
        <CardTitle className="text-center text-lg font-semibold text-gray-800">
          {UI_TEXT.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-center gap-4">
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleFileChange}
          className="hidden"
        />

        {!preview && (
          <Button
            variant="default"
            onClick={() => inputRef.current?.click()}
            disabled={isPending}
            className="gap-2"
          >
            {isPending ? (
              <>
                <Upload className="w-4 h-4 animate-pulse" />
                {UI_TEXT.uploading}
              </>
            ) : (
              <>
                <ImagePlus className="w-4 h-4" />
                {UI_TEXT.selectButton}
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
              onClick={() => inputRef.current?.click()}
              className="gap-1 text-gray-600 hover:text-gray-900"
            >
              <RefreshCcw className="w-4 h-4" />
              {UI_TEXT.reselect}
            </Button>
          </div>
        )}

        {isPending && (
          <div className="w-full">
            <Progress value={progress ?? 60} className="h-2 rounded-full" />
          </div>
        )}

        {error && (
          <p className="text-sm text-red-600">
            {UI_TEXT.error} {error}
          </p>
        )}

        {uploaded && (
          <p className="text-sm text-green-600">
            {UI_TEXT.success} <span className="font-medium">{uploaded.name}</span>
          </p>
        )}
      </CardContent>
    </Card>
  )
}
