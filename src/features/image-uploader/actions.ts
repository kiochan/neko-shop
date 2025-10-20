'use server'

import { prisma } from '@/lib/prisma'
import { Err, Ok, SafePromiseResult } from '@/shared/safe-result'

import { ImageMetaDto } from './dto'

export async function updateImageMetaAction(
  input: ImageMetaDto.UpdateImageMetaRequest
): SafePromiseResult<ImageMetaDto.UpdateImageMetaResponse> {
  const parsed = ImageMetaDto.UpdateImageMetaRequestZod.safeParse(input)
  if (!parsed.success) return Err(parsed.error)

  try {
    const { domain, name, description, path, hashedFilename } = parsed.data

    const uploaded = await prisma.uploadedImage.upsert({
      where: { hashedFilename },
      update: { name, description, path, domain },
      create: { name, description, path, domain, hashedFilename },
    })

    return Ok({
      domain: uploaded.domain,
      name: uploaded.name,
      description: uploaded.description ?? undefined,
      path: uploaded.path,
      hashedFilename: uploaded.hashedFilename,
    })
  } catch (error) {
    return Err(error as Error)
  }
}
