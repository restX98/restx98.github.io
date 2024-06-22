"use client";

import { useTranslations, useMessages } from "next-intl";
import CardHeader from "@/components/cards/card-header";
import CardProject from "@/components/cards/card-project";

export default function Portfolio() {
  const t = useTranslations("PortfolioPage");

  const messages = useMessages();
  const projects = Object.keys(messages.PortfolioPage.projects);

  return (
    <>
      <CardHeader className="snake-box" title={t("title")} />
      <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((p) => (
          <CardProject
            className="snake-box"
            key={p}
            title={t(`projects.${p}.name`)}
            image={t(`projects.${p}.image`)}
            hrefPage={t(`projects.${p}.pageUrl`)}
            hrefRepo={t(`projects.${p}.repoUrl`)}
          />
        ))}
        <CardProject className="snake-box" title="Coming Soon..." />
      </div>
    </>
  );
}
