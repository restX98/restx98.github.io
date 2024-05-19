import { siteConfig } from "@/config/site";
import { items } from "@/config/menu";

import { Inter } from "next/font/google";
import "./globals.css";

import { SnakeGameProvider, SnakeHouse } from "@restx98/snake-house-react";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <SnakeGameProvider>
          <main className="flex max-h-screen min-h-screen flex-col overflow-hidden bg-zinc-800">
            <Navbar className="flex-none" items={items} />
            <SnakeHouse className="relative flex-auto">{children}</SnakeHouse>
          </main>
        </SnakeGameProvider>
      </body>
    </html>
  );
}
