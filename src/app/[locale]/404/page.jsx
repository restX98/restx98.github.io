"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { GlassContainer } from "@/components/glass-container";

export default function NotFound() {
  const t = useTranslations("NotFoundPage");

  return (
    <>
      <GlassContainer className="snake-box">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-lime-600 lg:text-9xl">
              {t('404')}
            </h1>
            <p className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              {t('message')}
            </p>

            <Link
              className="my-4 inline-flex rounded-lg bg-zinc-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-zinc-700"
              href="/"
            >
              {t('backToHome')}
            </Link>
          </div>
        </div>
      </GlassContainer>
    </>
  );
}
