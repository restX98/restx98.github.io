"use client";

import { GlassCard } from "@/components/glass-card";
import { pageContents } from "@/config/pageContents";

export default function Contact() {
  const { title, contacts } = pageContents.contact;

  return (
    <>
      <GlassCard className="snake-box mb-5" title={title} />
      <div className="grid auto-rows-fr grid-cols-1 gap-4 lg:grid-cols-3">
        {contacts.map((p, id) => (
          <GlassCard
            className="snake-box"
            key={id}
            title={p.name}
            link={p.url}
          />
        ))}
      </div>
    </>
  );
}
