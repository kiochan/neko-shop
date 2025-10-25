'use server'

import { Product, ProductQuery } from '../definitions'
import { MockProductCats } from '../mocks/product.mock.data.const'

export type LoadProductsResponse = {
  total: number
  queriedProducts: Product[]
}

const allProducts = MockProductCats

export async function loadProducts(query: ProductQuery): Promise<LoadProductsResponse> {
  const offset = query.offset ?? 0
  const size = query.size ?? allProducts.length
  const total = allProducts.length

  // replace later with prisma
  const queriedProducts = allProducts.slice(offset, offset + size)

  return { total, queriedProducts }
}
