"use client";

import { GlassCard } from "@/components/glass-card";
import { Markdown } from "@/components/markdown";

import { pageContents } from "@/config/pageContents";

export default function AboutMe() {
  const { content } = pageContents.aboutMe;

  return (
    <GlassCard className="snake-box" >
      <div className="mt-5 text-left">
        <Markdown markdown={content} />
      </div>
    </GlassCard>
  );
}
