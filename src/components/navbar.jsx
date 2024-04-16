'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

function NavItem({ label, active, href }) {
  return (
    <div className='rounded-md flex justify-center align-center shadow-[4px_4px_8px_#212124,-4px_-4px_8px_#2d2d30]'>
      <div className={cn('rounded-md m-2px px-4 py-3 text-sm font-medium', active && 'shadow-[inset_4px_4px_8px_#212124,inset_-4px_-4px_8px_#2d2d30]')}>
        <Link class="text-white" href={href}>{label}</Link>
      </div>
    </div>
  )
}

export function Navbar({ className, items }) {
  const pathname = usePathname()

  return (
    <nav className={className}>
      <div class="mx-auto py-2 px-2">
        <div class="flex space-x-10 justify-center">
          {items.map((item, id) => (
            <NavItem
              key={id}
              href={item.href}
              label={item.label}
              active={pathname === item.href}
            />
          ))}
        </div>
      </div>
    </nav>
  )
}
