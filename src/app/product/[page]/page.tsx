import { Page } from '@/components/view/page'
import { ProductViewer } from '@/features/product-viewer'

export default function ProductPage({ params }: { params: { page: string } }) {
  return (
    <Page>
      <ProductViewer page={Number(params.page)} path="/product" />
    </Page>
  )
}
