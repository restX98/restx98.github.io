"use client";

import { Link } from "@/navigation";
import { GlassContainer } from "./glass-container";
import GHIcon from "@/assets/github.svg";

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
  repoLink,
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
          {repoLink && (
            <Link
              className="absolute bottom-0 right-0 m-1 rounded border border-gray-400 bg-white p-1 font-semibold text-zinc-800 shadow hover:bg-gray-100"
              href={repoLink}
              target="_blank"
            >
              <GHIcon />
            </Link>
          )}
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
