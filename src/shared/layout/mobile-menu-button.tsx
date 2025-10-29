'use client'
import { Menu } from 'lucide-react'
import { useCallback } from 'react'

import { Button } from '../ui/button'
import { SheetTrigger, SheetContent, Sheet, SheetHeader, SheetTitle } from '../ui/sheet'
import { useSidebar } from '../ui/sidebar'

import { Logo } from './logo'
import { MobileSideNavmenu } from './mobile-side-navmenu'
export function MobileMenuButton() {
  const { open, setOpen } = useSidebar()

  const closeSheet = useCallback(() => {
    setOpen(false)
  }, [setOpen])

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
                <Logo onClick={closeSheet} />
              </SheetTitle>
            </SheetHeader>
            <MobileSideNavmenu onNavigate={closeSheet} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
