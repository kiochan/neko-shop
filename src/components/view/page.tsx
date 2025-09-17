import { SidebarProvider } from './sidebar.context';
import PageHeader from './page-header';
import PageFooter from './page-footer';
import PageContent from './page-content';

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <main className="min-h-screen flex flex-col bg-background text-foreground container w-full max-w-full">
        <PageHeader />
        <PageContent>{children}</PageContent>
        <PageFooter />
      </main>
    </SidebarProvider>
  );
}
