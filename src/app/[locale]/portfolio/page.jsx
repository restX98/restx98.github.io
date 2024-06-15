"use client";

import { useTranslations, useMessages } from "next-intl";
import { GlassCard } from "@/components/glass-card";

export default function Portfolio() {
  const t = useTranslations("PortfolioPage");

  const messages = useMessages();
  const projects = Object.keys(messages.PortfolioPage.projects);

  return (
    <>
      <GlassCard className="snake-box mb-5" title={t("title")} />
      <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((p) => (
          <GlassCard
            className="snake-box"
            key={p}
            title={t(`projects.${p}.name`)}
            image={t(`projects.${p}.image`)}
            link={t(`projects.${p}.pageUrl`)}
            repoLink={t(`projects.${p}.repoUrl`)}
          />
        ))}
        <GlassCard className="snake-box" title="Coming Soon..." />
      </div>
    </>
  );
}
