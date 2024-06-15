"use client";

import { useTranslations, useMessages } from "next-intl";
import { GlassCard } from "@/components/glass-card";

export default function Contact() {
  const t = useTranslations("ContactPage");

  const messages = useMessages();
  const contacts = Object.keys(messages.ContactPage.contacts);

  return (
    <>
      <GlassCard className="snake-box mb-5" title={t("title")} />
      <div className="grid auto-rows-fr grid-cols-1 gap-4 lg:grid-cols-3">
        {contacts.map((c) => (
          <GlassCard
            className="snake-box"
            key={c}
            title={t(`contacts.${c}.name`)}
            link={t(`contacts.${c}.url`)}
          />
        ))}
      </div>
    </>
  );
}
