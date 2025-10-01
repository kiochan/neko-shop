'use client'
import { Menu } from 'lucide-react'

import { Button } from '../ui/button'
import { SheetTrigger, SheetContent, Sheet, SheetHeader, SheetTitle } from '../ui/sheet'

import Logo from './logo'
import { MobileSideNavmenu } from './mobile-side-navmenu'
import { useSidebar } from './sidebar.context'

export default function MobileMenuButton() {
  const { open, setOpen } = useSidebar()

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            className={`transition-opacity duration-1000 ${open ? 'opacity-0' : 'opacity-100'}`}
            variant="ghost"
            size="icon"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-72" aria-label="Mobile Sidebar">
          <div className="h-full">
            <SheetHeader>
              <SheetTitle>
                <Logo onClick={() => setOpen(false)} />
              </SheetTitle>
            </SheetHeader>
            <MobileSideNavmenu onNavigate={() => setOpen(false)} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
