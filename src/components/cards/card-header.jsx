"use client";

import CardContainer from "@/components/cards/card-container";
import { cn } from "@/lib/utils";

export default function CardHeader({
  className,
  title,
  force_uppercase = true,
}) {
  return (
    <CardContainer
      className={cn(className, "mb-5 py-3 text-center text-white")}
    >
      <h1 className={cn(force_uppercase && "uppercase")}>{title}</h1>
    </CardContainer>
  );
}
