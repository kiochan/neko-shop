import bcrypt from 'bcryptjs'

import { PrismaClient, PermissionAction } from '@/generated/prisma'

const prisma = new PrismaClient()

const DefaultPassword = 'admin'
const DefaultSaltLength = 10

async function main() {
  const passwordHash = await bcrypt.hash(DefaultPassword, DefaultSaltLength)

  const admin = await prisma.user.upsert({
    where: { email: 'admin@kiochan.one' },
    update: {},
    create: {
      email: 'admin@kiochan.one',
      name: 'Admin',
      passwordHash,
    },
  })

  const adminGroup = await prisma.group.upsert({
    where: { name: 'admin' },
    update: {},
    create: { name: 'admin' },
  })

  const permissions = await Promise.all(
    Object.values(PermissionAction).map((action) =>
      prisma.permission.upsert({
        where: { action },
        update: {},
        create: { action },
      })
    )
  )

  await prisma.group.update({
    where: { id: adminGroup.id },
    data: {
      permissions: {
        set: permissions.map((p) => ({ id: p.id })),
      },
    },
  })

  await prisma.user.update({
    where: { id: admin.id },
    data: {
      groups: {
        connect: { id: adminGroup.id },
      },
    },
  })

  console.log('✅ Admin user and group created:', admin)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
