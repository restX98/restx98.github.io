"use client";

import LocaleSwitcher from "@/components/locale-switcher";

export function Footer({ className }) {
  return (
    <nav className={className}>
      <div className="mx-auto space-x-5 pb-2 pt-1 text-center">
        <span>© 2024-beta | Enrico Restuccia</span>
        <LocaleSwitcher />
      </div>
    </nav>
  );
}
