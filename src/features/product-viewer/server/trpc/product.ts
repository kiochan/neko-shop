import 'server-only'

import { ProductDto } from '@/features/product-viewer/dto'
import { prisma } from '@/shared/prisma'
import { router, publicProcedure } from '@/shared/trpc/server/trpc'

export const productRouter = router({
  list: publicProcedure
    .input(ProductDto.GetProductListRquestZod)
    .output(ProductDto.GetProductListResponseZod)
    .query(async ({ input }) => {
      const { offset, size } = input

      const total = await prisma.product.count()

      const items = await prisma.product.findMany({
        skip: offset,
        take: size,
        orderBy: { createdAt: 'desc' },
        include: {
          tags: true,
        },
      })

      return {
        total,
        queriedProducts: items.map((p) => ({
          id: p.id,
          name: p.name,
          slug: p.slug,
          description: p.description,
          price: p.price.toNumber(), // Decimal -> number
          imageUrl: p.imageUrl ?? undefined, // nullable -> undefined
          createdAt: p.createdAt,
        })),
      }
    }),

  get: publicProcedure
    .input(ProductDto.GetProductRequestZod)
    .output(ProductDto.GetProductResponseZod)
    .query(async ({ input }) => {
      const p = await prisma.product.findUnique({
        where: { id: input.id },
        include: {
          tags: true,
        },
      })

      if (!p) throw new Error('Product not found')

      return {
        id: p.id,
        name: p.name,
        slug: p.slug,
        description: p.description,
        price: p.price.toNumber(),
        imageUrl: p.imageUrl ?? '',
        createdAt: p.createdAt,
      }
    }),
})
