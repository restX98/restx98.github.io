"use client";

import { cn } from "@/lib/utils";

export function GlassContainer({ children, className }) {
  return (
    <div
      className={cn(
        className,
        "relative overflow-hidden rounded-md border border-zinc-500/20 bg-zinc-500/10 shadow-modal backdrop-blur-sm",
      )}
    >
      {children}
    </div>
  );
}
