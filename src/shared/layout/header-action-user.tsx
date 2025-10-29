'use client'

import Link from 'next/link'

import { useCurrentUser } from '@/features/auth'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '../ui/menubar'

export function HeaderActionUser() {
  const user = useCurrentUser()

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
          {!user ? null : (
            <MenubarItem asChild>
              <Link href="/dashboard">Dashboard</Link>
            </MenubarItem>
          )}
          {user ? null : (
            <MenubarItem asChild>
              <Link href="/login">Login</Link>
            </MenubarItem>
          )}
          {user ? null : (
            <MenubarItem asChild>
              <Link href="/registerpage">Register</Link>
            </MenubarItem>
          )}
          {!user ? null : (
            <MenubarItem asChild>
              <Link href="/logout">Logout</Link>
            </MenubarItem>
          )}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
