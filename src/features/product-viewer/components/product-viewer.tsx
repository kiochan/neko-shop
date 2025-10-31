import { api } from '@/shared/trpc/server'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/shared/ui/card'

import { GetProductListRquest } from '../dto/product.dto'

import { ProductGridViewer } from './product-grid-viewer'
import { ProductListViewer } from './product-list-viewer'
import { ProductViewerPaginator } from './product-viewer-paginator'

type ProductViewerPropsPrameters = {
  viewerMode?: 'grid' | 'list'
  page?: number
  itemPerPage?: number
  path: string
}

const defaultPageSize = 8
const defaultViewerModeMode = 'grid'

export type ProductViewerProps = ProductViewerPropsPrameters

export async function ProductViewer(props: ProductViewerProps) {
  const mode = props.viewerMode ?? defaultViewerModeMode
  const page = props.page ?? 1
  const size = props.itemPerPage ?? defaultPageSize

  const pageOffset = page - 1
  const itemOffset = pageOffset * size

  const query: GetProductListRquest = {
    offset: itemOffset,
    size,
  }

  const { total, queriedProducts } = await api.product.list(query)

  const viewer =
    mode === 'grid' ? (
      <ProductGridViewer products={queriedProducts} />
    ) : (
      <ProductListViewer products={queriedProducts} />
    )

  return (
    <section className="w-full max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle>Product</CardTitle>
        </CardHeader>
        <CardContent>{viewer}</CardContent>
        <CardFooter>
          <ProductViewerPaginator path={props.path} offset={itemOffset} size={size} total={total} />
        </CardFooter>
      </Card>
    </section>
  )
}
