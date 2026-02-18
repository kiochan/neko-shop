import { z } from 'zod'

export const CartAddItemRequestZod = z.object({
  productId: z.number(),
  quantity: z.number().min(1),
})
export type CartAddItemRequest = z.infer<typeof CartAddItemRequestZod>

export const CartAddItemResponseZod = z.object({
  success: z.boolean(),
})
export type CartAddItemResponse = z.infer<typeof CartAddItemResponseZod>
