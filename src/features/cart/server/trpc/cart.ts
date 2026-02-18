import 'server-only'

import { router, publicProcedure } from '@/shared/trpc/server/trpc'

import { CartDto } from '../..'

export const productRouter = router({
  add: publicProcedure
    .input(CartDto.CartAddItemRequestZod)
    .output(CartDto.CartAddItemResponseZod)
    .mutation(async ({ ctx, input }) => {
      const { productId, quantity } = input

      const customerId = ctx.userId

      if (!customerId) {
        return { success: false }
      }

      const cart = await ctx.prisma.cart.upsert({
        where: { customerId },
        update: {},
        create: { customerId },
      })

      const product = await ctx.prisma.product.findUnique({
        where: { id: productId },
      })
      if (!product) {
        return { success: false }
      }

      const existingItem = await ctx.prisma.cartItem.findFirst({
        where: { cartId: cart.id, productId },
      })

      if (existingItem) {
        await ctx.prisma.cartItem.update({
          where: { id: existingItem.id },
          data: {
            quantity: existingItem.quantity + quantity,
          },
        })
      } else {
        await ctx.prisma.cartItem.create({
          data: {
            cartId: cart.id,
            productId,
            quantity,
          },
        })
      }

      return { success: true }
    }),
})
