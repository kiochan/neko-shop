'use client';
import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetFooter,
} from '../ui/sheet';
import { useSidebar } from './sidebar.context';
import { MobileSideNavmenu } from './mobile-side-navmenu';
import Logo from './logo';

export default function MobileMenuButton() {
  const { open, setOpen } = useSidebar();

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-72" aria-label="Mobile Sidebar">
          <div className="h-full">
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <MobileSideNavmenu onNavigate={() => setOpen(false)} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
