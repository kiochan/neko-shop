'use client'

import { useCallback } from 'react'

import { Page } from '@/components/view/page'
import RegisterPage from '@/components/view/register-page'

export default function HomePage() {
  const onClick = useCallback(() => {
    alert('Button clicked!')
  }, [])

  return (
    <Page>
      <RegisterPage />
    </Page>
  )
}
