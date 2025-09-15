import { SiteSettings } from '@/settings/site.const';

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex flex-col">
      {/* header */}
      <header className="w-full border-b p-4 bg-white">
        <h1 className="text-2xl font-bold">{SiteSettings.name}</h1>
      </header>

      {/* content */}
      <div className="flex-1 flex items-center justify-center p-6 bg-gray-50">{children}</div>

      {/* footer */}
      <footer className="w-full border-t p-4 text-center text-sm text-gray-500">
        {SiteSettings.footerText}
      </footer>
    </main>
  );
}
