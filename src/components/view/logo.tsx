import { SiteSettings } from '@/settings/site.const';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="text-xl font-bold tracking-tight">{SiteSettings.name}</h1>
    </Link>
  );
}
