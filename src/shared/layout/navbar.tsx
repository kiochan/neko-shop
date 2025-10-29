import Link from 'next/link'

import { NavbarSettings } from '@/shared/settings/routes.const'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../ui/navigation-menu'

export function Navbar() {
  return (
    <NavigationMenu className="hidden md:flex flex-1 justify-center items-center">
      <NavigationMenuList>
        {NavbarSettings.map(({ id, href, label }) => (
          <NavigationMenuItem key={id}>
            <NavigationMenuLink asChild>
              <Link href={href}>{label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
