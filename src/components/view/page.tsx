import PageContent from './page-content'
import PageFooter from './page-footer'
import PageHeader from './page-header'
import { SidebarProvider } from './sidebar.context'

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <main className="min-h-screen flex flex-col bg-background text-foreground container w-full max-w-full">
        <PageHeader />
        <PageContent>{children}</PageContent>
        <PageFooter />
      </main>
    </SidebarProvider>
  )
}
