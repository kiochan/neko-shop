import { NavbarItemSettings } from '@/definitions/settings/navbar-item.model'

export const NavbarSettings = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'product', label: 'Product', href: '/product' },
] as const satisfies NavbarItemSettings[]
