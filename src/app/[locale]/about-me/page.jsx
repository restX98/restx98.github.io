"use client";

import CardContainer from "@/components/cards/card-container";
import Markdown from "@/components/markdown";

import { useTranslations } from "next-intl";

export default function AboutMe() {
  const t = useTranslations("AboutMePage");

  return (
    <CardContainer className="snake-box p-5">
      <div className="text-left">
        <Markdown markdown={t("content")} />
      </div>
    </CardContainer>
  );
}
