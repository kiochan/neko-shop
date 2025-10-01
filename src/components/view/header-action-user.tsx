import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '../ui/menubar'

export default function HeaderActionUser() {
  return (
    <Menubar className="border-0 shadow-none bg-transparent">
      <MenubarMenu>
        <MenubarTrigger>
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback className="bg-accent-foreground text-background">
              UserAvatar
            </AvatarFallback>
          </Avatar>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem asChild>
            <Link href="/dashboard">Dashboard</Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link href="/login">Login</Link>
          </MenubarItem>
          <MenubarItem asChild>Logout</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
