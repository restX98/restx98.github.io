"use client";

import { useTranslations, useMessages } from "next-intl";
import CardHeader from "@/components/cards/card-header";
import CardContact from "@/components/cards/card-contact";

export default function Contact() {
  const t = useTranslations("ContactPage");

  const messages = useMessages();
  const contacts = Object.keys(messages.ContactPage.contacts);

  return (
    <>
      <CardHeader className="snake-box" title={t("title")} />
      <div className="flex flex-wrap justify-center">
        {contacts.map((c) => (
          <div key={c} className="basis-1/2 p-1 sm:basis-1/3">
            <CardContact
              className="snake-box"
              title={t(`contacts.${c}.name`)}
              icon={c}
              href={t(`contacts.${c}.url`)}
            />
          </div>
        ))}
      </div>
    </>
  );
}
