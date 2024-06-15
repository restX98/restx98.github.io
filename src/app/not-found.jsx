"use client";

import Link from "next/link";
import { GlassContainer } from "@/components/glass-container";

export default function NotFound() {
  return (
    <>
      <GlassContainer className="snake-box">
        <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl font-extrabold tracking-tight text-lime-600 lg:text-9xl">404</h1>
            <p class="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">Something's missing.</p>
            <p class="mb-4 text-lg font-light text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
            <Link className="my-4 inline-flex rounded-lg bg-zinc-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-zinc-700 focus:outline-none focus:ring-4 focus:ring-zinc-900" href="#">
              Back to Home
            </Link>
          </div>
        </div>
      </GlassContainer>
    </>
  );
}
