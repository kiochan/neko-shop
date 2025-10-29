import { ScrollArea } from '@radix-ui/react-scroll-area'
import Link from 'next/link'

import { NavbarSettings } from '@/shared/settings/routes.const'

import { Button } from '../ui/button'

type MobileSidebarProps = {
  onNavigate?: () => void
}

export function MobileSideNavmenu({ onNavigate }: MobileSidebarProps) {
  return (
    <ScrollArea className="h-[calc(100%-6rem)]">
      <div className="p-4 space-y-6">
        <div>
          {NavbarSettings.map(({ id, href, label }) => (
            <Button key={id} variant="ghost" className="justify-start gap-2 w-full" asChild>
              <Link href={href} onClick={onNavigate}>
                {label}
              </Link>
            </Button>
          ))}
          <Button variant="ghost" className="justify-start gap-2 w-full" asChild>
            <Link
              href={'https://github.com/kiochan/neko-shop'}
              onClick={onNavigate}
              target="_blank"
              rel="noreferrer"
            >
              Fork me on Github
            </Link>
          </Button>
        </div>
      </div>
    </ScrollArea>
  )
}
