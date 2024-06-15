import { createSharedPathnamesNavigation } from "next-intl/navigation";

import { siteConfig } from "@/config/site";

export const locales = siteConfig.locales;
export const localePrefix = siteConfig.localePrefix;

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
