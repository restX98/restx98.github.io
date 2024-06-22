"use client";

import CardContainer from "@/components/cards/card-container";
import { useIcon } from "@/components/use-icon";

import { cn } from "@/lib/utils";
import { Link } from "@/navigation";

export default function CardContact({
  className,
  href,
  title,
  icon,
  force_uppercase = true,
}) {
  const Icon = useIcon(icon);

  return (
    <Link href={href} target="_blank">
      <CardContainer
        className={cn(
          className,
          "flex aspect-square flex-col items-center justify-center",
        )}
      >
        {Icon && <div className="mb-2.5 text-4xl">{Icon}</div>}
        {title && (
          <span
            className={cn("text-lg font-bold", force_uppercase && "uppercase")}
          >
            {title}
          </span>
        )}
      </CardContainer>
    </Link>
  );
}
