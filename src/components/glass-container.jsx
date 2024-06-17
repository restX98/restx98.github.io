"use client";

import { cn } from "@/lib/utils";

export function GlassContainer({ children, className }) {
  return (
    <div
      className={cn(
        className,
        "relative overflow-hidden rounded-md border border-primary-500/20 bg-primary-500/10 shadow-modal backdrop-blur-sm",
      )}
    >
      {children}
    </div>
  );
}
