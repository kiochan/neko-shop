import { ProductViewer } from '@/features/product-viewer'
import { PageContainer } from '@/shared/layout/page-container'

export default async function ProductPage({ params }: { params: { page: string } }) {
  return (
    <PageContainer>
      <ProductViewer page={Number(params.page)} path="/product" />
    </PageContainer>
  )
}
