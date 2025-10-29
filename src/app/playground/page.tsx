import { ImageUploader } from '@/features/image-uploader'
import { PageContainer } from '@/shared/layout/page-container'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'

export default function HomePage() {
  return (
    <PageContainer>
      <Card>
        <CardHeader>
          <CardTitle>ImageUploader</CardTitle>
        </CardHeader>
        <CardContent>
          <ImageUploader domain="product" />
        </CardContent>
      </Card>
    </PageContainer>
  )
}
