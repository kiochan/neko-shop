import Link from 'next/link';

import { SiteSettings } from '@/settings/site.const';

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="text-xl font-bold tracking-tight">{SiteSettings.name}</h1>
    </Link>
  );
}
