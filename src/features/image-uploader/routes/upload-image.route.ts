'use server'

import crypto from 'crypto'
import fs from 'fs'
import path from 'path'

import { NextRequest, NextResponse } from 'next/server'
import sharp from 'sharp'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const file = formData.get('file') as File
    const domain = formData.get('domain') as string
    const name = formData.get('name') as string | null
    const description = formData.get('description') as string | null

    if (!file || !domain)
      return NextResponse.json({ error: 'Missing file or domain' }, { status: 400 })

    const buffer = Buffer.from(await file.arrayBuffer())
    const hash = crypto.createHash('sha256').update(buffer).digest('hex')
    const hashedFilename = `${hash}.webp`

    const dateDir = new Date().toISOString().split('T')[0]
    const uploadDir = path.join(process.cwd(), 'uploads/images', domain, dateDir)
    await fs.promises.mkdir(uploadDir, { recursive: true })

    const filePath = path.join(uploadDir, hashedFilename)
    await sharp(buffer).webp({ quality: 85 }).toFile(filePath)

    const relativePath = path.relative(process.cwd(), filePath).replace(/\\/g, '/')

    return NextResponse.json({
      ok: true,
      domain,
      name: name || file.name,
      description,
      path: relativePath,
      hashedFilename,
    })
  } catch (err) {
    console.error('Upload error:', err)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
