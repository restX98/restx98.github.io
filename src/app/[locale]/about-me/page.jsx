"use client";

import { GlassCard } from "@/components/glass-card";
import { Markdown } from "@/components/markdown";

import { useTranslations } from "next-intl";

export default function AboutMe() {
  const t = useTranslations("AboutMePage");

  return (
    <GlassCard className="snake-box">
      <div className="mt-5 text-left">
        <Markdown markdown={t("content")} />
      </div>
    </GlassCard>
  );
}
