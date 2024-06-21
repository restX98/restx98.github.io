"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";

import { useRouter, usePathname, locales } from "@/navigation";
import { cn } from "@/lib/utils";

function LocaleSwitcherSelect({ children, defaultValue, label }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <label
      className={cn(
        "relative text-primary-400",
        isPending && "transition-opacity [&:disabled]:opacity-30",
      )}
    >
      <p className="sr-only">{label}</p>
      <select
        className="inline-flex bg-transparent !outline-none"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  );
}

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
      {locales.map((l) => (
        <option key={l} value={l}>
          {t("locale", { locale: l })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
