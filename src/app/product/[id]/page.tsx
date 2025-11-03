import { ProductDetailPage } from '@/features/product-viewer/components/single-produt-viewer'
import { PageContainer } from '@/shared/layout/page-container'

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params

  return (
    <PageContainer>
      <ProductDetailPage id={Number(id)} />
    </PageContainer>
  )
}
