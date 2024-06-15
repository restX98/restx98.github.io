"use client";

import { Link, usePathname } from "@/navigation";
import LocaleSwitcher from "./locale-switcher";

import { cn } from "@/lib/utils";

function NavItem({ label, active, href }) {
  return (
    <div className="flex items-center justify-center rounded-md shadow-nav-item">
      <div
        className={cn(
          "m-2px rounded-md px-4 py-3 text-sm font-medium",
          active && "shadow-nav-item-active",
        )}
      >
        <Link className="whitespace-nowrap text-white" href={href}>
          {label}
        </Link>
      </div>
    </div>
  );
}

export function Navbar({ className, items }) {
  const pathname = usePathname();

  return (
    <nav className={className}>
      <div className="mx-auto p-2">
        <div className="flex justify-center space-x-10">
          {items.map((item, id) => (
            <NavItem
              key={id}
              href={item.href}
              label={item.label}
              active={pathname === item.href}
            />
          ))}
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  );
}
