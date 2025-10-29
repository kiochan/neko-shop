import Link from 'next/link'

import { SiteSettings } from '@/shared/settings/site.const'

type LogoProps = {
  onClick?: () => void
}

export function Logo({ onClick }: LogoProps) {
  return (
    <Link href="/" onClick={onClick}>
      <h1 className="text-xl font-bold tracking-tight">{SiteSettings.name}</h1>
    </Link>
  )
}
