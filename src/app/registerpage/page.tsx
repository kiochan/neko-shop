'use client';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Page } from '@/components/view/page';
import RegisterPage from '@/components/view/register-page';
import { useCallback } from 'react';

export default function HomePage() {
  const onClick = useCallback(() => {
    alert('Button clicked!');
  }, []);

  return (
    <Page>
      <RegisterPage />
    </Page>
  );
}
