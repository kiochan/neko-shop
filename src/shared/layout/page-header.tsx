import { HeaderActions } from './header-actions'
import { Logo } from './logo'
import { MobileMenuButton } from './mobile-menu-button'
import { Navbar } from './navbar'

export function PageHeader() {
  return (
    <header className="sticky flex top-0 z-50 w-full justify-center border-b bg-background/80 backdrop-blur">
      <div className="flex h-16 justify-between items-center gap-4 px-4 w-full max-w-4xl">
        <MobileMenuButton />
        <Logo />
        <Navbar />
        <HeaderActions />
      </div>
    </header>
  )
}
