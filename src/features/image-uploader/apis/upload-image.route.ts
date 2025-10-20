'use server'

import crypto from 'crypto'
import fs from 'fs'
import path from 'path'

import { NextRequest, NextResponse } from 'next/server'
import sharp from 'sharp'

import { Err, Ok, SafeResult } from '@/shared/safe-result'

import { ImageFileDto } from '../dto'

export async function POST(
  req: NextRequest
): Promise<NextResponse<SafeResult<ImageFileDto.SaveImageFileResponse, string>>> {
  try {
    const formData = await req.formData()

    const safeParsed = ImageFileDto.SaveImageFileRequestZod.safeParse(formData)

    if (!safeParsed.success) {
      const errorMessage = 'Invalid request data: ' + safeParsed.error.message
      return NextResponse.json(Err(errorMessage), {
        status: 400,
      })
    }

    const safeData = safeParsed.data

    const buffer = Buffer.from(await safeData.file.arrayBuffer())
    const hash = crypto.createHash('sha256').update(buffer).digest('hex')
    const hashedFilename = `${hash}.webp`

    const dateDirname = new Date().toISOString().split('T')[0]
    const absoluteUploadPath = path.join(
      process.cwd(),
      'uploads/images',
      safeData.domain,
      dateDirname
    )
    await fs.promises.mkdir(absoluteUploadPath, { recursive: true })

    // get path relative to project root
    const filePath = path.join(absoluteUploadPath, hashedFilename)
    await sharp(buffer).webp({ quality: 85 }).toFile(filePath)

    // format path to unix style for consistency
    const relativePath = path.relative(process.cwd(), filePath).replace(/\\/g, '/')

    return NextResponse.json(
      Ok({
        domain: safeData.domain,
        name: safeData.name ?? safeData.file.name,
        description: safeData.description,
        path: relativePath,
        hashedFilename,
      })
    )
  } catch {
    return NextResponse.json(Err(`Upload failed`), { status: 500 })
  }
}
