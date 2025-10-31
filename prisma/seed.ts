import { PrismaClient, PermissionAction } from '@prisma/client'
import bcrypt from 'bcryptjs'

import { MockProductCats } from './mocks/product.mock.data.const'

const prisma = new PrismaClient()

const DefaultPassword = 'admin'
const DefaultSaltLength = 10

async function uniqueSlug(base: string) {
  let slug = base
  let counter = 1

  while (true) {
    const exists = await prisma.product.findUnique({
      where: { slug },
      select: { id: true },
    })
    if (!exists) return slug
    slug = `${base}-${counter}`
    counter++
  }
}

async function main() {
  const passwordHash = await bcrypt.hash(DefaultPassword, DefaultSaltLength)

  // user
  const admin = await prisma.user.upsert({
    where: { email: 'admin@kiochan.one' },
    update: {},
    create: {
      email: 'admin@kiochan.one',
      name: 'Admin',
      passwordHash,
    },
  })

  // permissions
  const permissions = await Promise.all(
    Object.values(PermissionAction).map((action) =>
      prisma.permission.upsert({
        where: { action },
        update: {},
        create: { action },
      })
    )
  )

  // set permissions to admin group
  const adminGroup = await prisma.group.upsert({
    where: { name: 'admin' },
    update: {},
    create: { name: 'admin' },
  })

  await prisma.group.update({
    where: { id: adminGroup.id },
    data: {
      permissions: {
        set: permissions.map((p) => ({ id: p.id })),
      },
    },
  })

  // set admin user to admin group
  await prisma.user.update({
    where: { id: admin.id },
    data: {
      groups: {
        connect: { id: adminGroup.id },
      },
    },
  })

  // clean existing products
  await prisma.product.deleteMany()

  // insert mock products
  for (const p of MockProductCats) {
    await prisma.product.create({
      data: {
        name: p.name,
        slug: await uniqueSlug(p.name.toLowerCase().replace(/\s+/g, '-').slice(0, 20)),
        description: p.description,
        price: p.price,
        imageUrl: p.imageUrl,
      },
    })
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
