import { SiteSettings } from '@/settings/site.const';

export default function PageFooter() {
  return (
    <footer className="w-full border-t p-4 text-center text-sm text-muted-foreground">
      {SiteSettings.footerText}
    </footer>
  );
}
