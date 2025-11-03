import { z } from 'zod'

import { ProductZod } from '@/features/product-viewer/dto/product.dto'
import { PageContainer } from '@/shared/layout/page-container'
import { api } from '@/shared/trpc/server'
import { Card } from '@/shared/ui'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'

export type ProductId = {
  id: number
}

export async function ProductDetailPage({ id }: ProductId) {
  const product = await api.product.get({ id })
  const ProductsArrayZod = z.array(ProductZod)
  const parsed = ProductsArrayZod.safeParse([product])
  if (!parsed.success) {
    return (
      <PageContainer>
        <div className="p-6">Error</div>
      </PageContainer>
    )
  }

  return (
    <Card className="w-full max-w-7xl mx-auto p-4 shadow h-auto">
      <div className="flex flex-col mb-4 md:flex-row gap-6 ">
        <div className="grid product-single w-full">
          <div className="grid_item md:col-span-1 flex flex-col">
            <div className="w-full rounded-lg flex items-center justify-center">
              <img
                src={product.imageUrl || 'image not found'}
                alt={product.name}
                width={800}
                height={800}
                className="w-164 h-164 aspect-square object-cover"
              />
            </div>
          </div>
        </div>
        <div className="grid product-single">
          <div className="grid_item md:col-span-1 flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold text-left mb-6">{product.name}</h1>
            <p className="text-lg text-gray-700 mb-4">
              {Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(
                product.price
              )}
            </p>
            <span className="font-medium">Quantity:</span>
            <Input type="number" min={1} defaultValue={1} className="w-20 mb-4 sm:w-24" />
            <Button variant="outline" className="w-full mb-4 sm:w-auto max-w-full">
              Add to Cart
            </Button>
            <Button className="flex w-full mb-4 sm:w-auto max-w-full">Buy Now</Button>
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-gray-600 whitespace-pre-line mb-4">{product.description}</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
