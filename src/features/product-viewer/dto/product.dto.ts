import { z } from 'zod'

export const GetProductListRquestZod = z.object({
  offset: z.number(),
  size: z.number(),
})
export type GetProductListRquest = z.infer<typeof GetProductListRquestZod>

export const ProductZod = z.object({
  name: z.string(),
  description: z.string(),
  id: z.number(),
  createdAt: z.date(),
  price: z.number(),
  slug: z.string(),
  imageUrl: z.string().optional(),
})

export type Product = z.infer<typeof ProductZod>

export const GetProductListResponseZod = z.object({
  total: z.number(),
  queriedProducts: z.array(ProductZod),
})

export type GetProductListResponse = z.infer<typeof GetProductListResponseZod>

export const GetProductRequestZod = z.object({
  id: z.number(),
})
export type GetProductRequest = z.infer<typeof GetProductRequestZod>

export const GetProductResponseZod = ProductZod

export type GetProductResponse = z.infer<typeof GetProductResponseZod>
