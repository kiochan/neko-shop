import { SidebarProvider } from '../ui/sidebar'

import { PageContent } from './page-content'
import { PageFooter } from './page-footer'
import { PageHeader } from './page-header'

export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={false}>
      <main className="min-h-screen flex flex-col bg-background text-foreground container w-full max-w-full">
        <PageHeader />
        <PageContent>{children}</PageContent>
        <PageFooter />
      </main>
    </SidebarProvider>
  )
}
