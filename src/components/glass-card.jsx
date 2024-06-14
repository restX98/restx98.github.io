"use client";

import Link from "next/link";
import { GlassContainer } from "./glass-container";

import { cn } from "@/lib/utils";

function LinkedGlassCard({ children, href, target }) {
  if (href) {
    return (
      <Link href={href} target={target}>
        {children}
      </Link>
    );
  } else {
    return children;
  }
}

export function GlassCard({
  children,
  className,
  title,
  image,
  link,
  target = "_blank",
}) {
  return (
    <GlassContainer className={className}>
      <LinkedGlassCard href={link} target={target}>
        <div
          className={cn(
            image && "absolute",
            !children && "flex items-center justify-center",
            "size-full px-10 py-6 text-center text-white",
          )}
        >
          <span className="uppercase">{title}</span>
          {children}
        </div>
        {image && (
          <img
            className="max-h-full max-w-full object-cover"
            src={image}
            alt={title}
          />
        )}
      </LinkedGlassCard>
    </GlassContainer>
  );
}
