import { prisma } from '@/lib/prisma'

import type { UploadedImageRequest, UploadedImageResponse } from './schema'

export async function saveUploadedImageService(
  input: UploadedImageRequest
): Promise<UploadedImageResponse> {
  const { domain, name, description, path, hashedFilename } = input

  const uploaded = await prisma.uploadedImage.upsert({
    where: { hashedFilename },
    update: { name, description, path, domain },
    create: { name, description, path, domain, hashedFilename },
  })

  return {
    domain: uploaded.domain,
    name: uploaded.name,
    description: uploaded.description,
    path: uploaded.path,
    hashedFilename: uploaded.hashedFilename,
  }
}
