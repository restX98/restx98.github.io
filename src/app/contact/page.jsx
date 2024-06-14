"use client";

import { GlassCard } from "@/components/glass-card";

export default function Portfolio() {
  return (
    <>
      <GlassCard
        className="snake-box mb-5"
        title="Contatti / Contacts"
      />
      <div className="grid auto-rows-fr grid-cols-1 gap-4 lg:grid-cols-3">
        <GlassCard className="snake-box" title="Email" link="mailto:enrico.rest98@gmail.com" target="_self" />
        <GlassCard className="snake-box" title="Linkedin" link="https://www.linkedin.com/in/enricorestuccia" />
        <GlassCard className="snake-box" title="Github" link="https://github.com/restx98" />
      </div>
    </>
  )
}
