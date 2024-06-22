"use client";

import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

import { Link } from "@/navigation";
import CardContainer from "@/components/cards/card-container";

import { cn } from "@/lib/utils";

export default function CardProject({
  className,
  title,
  image,
  hrefRepo,
  hrefPage,
}) {
  return (
    <CardContainer className={cn(className, "select-none")}>
      <div
        className={cn(
          image && "absolute",
          "flex items-center justify-center",
          "size-full px-10 py-6 text-center text-white",
        )}
      >
        <span className="uppercase">{title}</span>
        <div className="absolute bottom-0 right-0 m-1 flex space-x-1">
          {hrefPage && (
            <Link
              className="rounded border border-primary-400 bg-white p-1 font-semibold text-primary-800 shadow hover:bg-primary-100"
              href={hrefPage}
              target="_blank"
            >
              <FaGlobe />
            </Link>
          )}
          {hrefRepo && (
            <Link
              className="rounded border border-primary-400 bg-white p-1 font-semibold text-primary-800 shadow hover:bg-primary-100"
              href={hrefRepo}
              target="_blank"
            >
              <FaGithub />
            </Link>
          )}
        </div>
      </div>
      {image && (
        <img
          className="max-h-full max-w-full object-cover"
          src={image}
          alt={title}
        />
      )}
    </CardContainer>
  );
}
