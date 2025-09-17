import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Button } from '../ui/button';
import Logo from './logo';
import Link from 'next/link';

type MobileSidebarProps = {
  onNavigate?: () => void;
};

export function MobileSideNavmenu({ onNavigate }: MobileSidebarProps) {
  return (
    <ScrollArea className="h-[calc(100%-6rem)]">
      <div className="p-4 space-y-6">
        <div>
          <Button variant="ghost" className="justify-start gap-2 w-full" asChild>
            <Link href="/" onClick={onNavigate}>
              Home
            </Link>
          </Button>
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
  );
}
