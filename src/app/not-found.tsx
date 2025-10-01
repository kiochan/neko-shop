import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Page } from '@/components/view/page';

export default function NotFoundPage() {
  return (
    <Page>
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
    </Page>
  );
}
