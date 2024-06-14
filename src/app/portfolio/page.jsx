"use client";

import { GlassCard } from "@/components/glass-card";
import { pageContents } from "@/config/pageContents";

export default function Portfolio() {
  const { title, projects } = pageContents.portfolio;

  return (
    <>
      <GlassCard className="snake-box mb-5" title={title} />
      <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((p) => (
          <GlassCard
            className="snake-box"
            key={p.id}
            title={p.name}
            image={p.image}
            link={p.pageUrl || p.repoUrl}
          />
        ))}
        <GlassCard className="snake-box" title="Coming Soon..." />
      </div>
    </>
  );
}
