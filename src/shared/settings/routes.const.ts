import { NavbarItemSettings } from '@/shared/settings/navbar-item.model'

export const NavbarSettings = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'product', label: 'Products', href: '/products' },
] as const satisfies NavbarItemSettings[]
