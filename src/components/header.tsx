import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import { AccountMenu } from './account-menu'
import { NavLink } from './nav-link'
import { ThemeToggle } from './theme/theme-toggle'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <div className="sticky top-0 z-50 border-b bg-background/75 backdrop-blur">
      <div className="flex h-16 items-center gap-4 px-6">
        <Pizza className="h-6 w-6 shrink-0" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            Início
          </NavLink>
          <NavLink to="/orders">
            <UtensilsCrossed className="h-4 w-4" />
            Pedidos
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
