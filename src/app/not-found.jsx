"use client";

import { redirect } from "next/navigation"; // eslint-disable-line no-restricted-imports

export default function NotFound() {
  redirect(`/en/404`);
}
