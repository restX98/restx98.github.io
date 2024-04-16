'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

function NavItem({ label, active, href }) {
  return (
    <div className='rounded-md flex justify-center align-center shadow-[4px_4px_8px_#101011,-4px_-4px_8px_#3e3e43]'>
      <div className={cn('rounded-md m-px px-3 py-2 text-sm font-medium', active && 'shadow-[inset_4px_4px_8px_#101011,inset_-4px_-4px_8px_#3e3e43]')}>
        <Link class="text-white" href={href}>{label}</Link>
      </div>
    </div>
  )
}

export function Navbar({ className, items }) {
  const pathname = usePathname()

  return (
    <nav className={className}>
      <div class="mx-auto max-w-7xl py-2 px-2 sm:px-6 lg:px-8">
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
