import HeaderActions from './header-actions'
import HeaderActionsMobile from './header-actions-moble'
import Logo from './logo'
import MobileMenuButton from './mobile-menu-button'

export default function PageHeader() {
  return (
    <header className="sticky flex top-0 z-50 w-full justify-center border-b bg-background/80 backdrop-blur">
      <div className="flex h-16 items-center  gap-4 px-4 w-full max-w-4xl">
        <MobileMenuButton />
        <Logo />
        <HeaderActions />
        <HeaderActionsMobile />
      </div>
    </header>
  )
}
