import Link from 'next/link'

import { PageContainer } from '@/shared/layout/page-container'
import { Button } from '@/shared/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'

export default function NotFoundPage() {
  return (
    <PageContainer>
      <Card>
        <CardHeader>
          <CardTitle>404</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Sorry, the page you are looking for does not exist.</p>
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
        </CardContent>
      </Card>
    </PageContainer>
  )
}
