import { ProductViewer } from '@/features/product-viewer'
import { PageContainer } from '@/shared/layout/page-container'

export default async function ProductPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params

  return (
    <PageContainer>
      <ProductViewer page={Number(page)} path="/product" />
    </PageContainer>
  )
}
