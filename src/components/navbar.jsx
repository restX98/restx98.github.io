"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
        <Link class="text-white" href={href}>
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
      <div class="mx-auto p-2">
        <div class="flex justify-center space-x-10">
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
  );
}
