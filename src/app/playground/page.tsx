import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Page } from '@/components/view/page'
import { ImageUploader } from '@/features/image-uploader'

export default function HomePage() {
  return (
    <Page>
      <Card>
        <CardHeader>
          <CardTitle>ImageUploader</CardTitle>
        </CardHeader>
        <CardContent>
          <ImageUploader domain="product" />
        </CardContent>
      </Card>
    </Page>
  )
}
