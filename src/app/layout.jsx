import { siteConfig } from "@/config/site";
import { items } from "@/config/menu";

import { Inter } from "next/font/google";
import "./globals.css";

import { SnakeGameProvider, SnakeHouse } from "@restx98/snake-house-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

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
          <main className="fixed inset-0 flex h-dvh w-screen flex-col bg-zinc-800">
            <Navbar className="flex-none" items={items} />
            <div className="flex-auto">
              <SnakeHouse className="container mx-auto px-8 py-6">
                {children}
              </SnakeHouse>
            </div>
            <Footer className="flex-none" />
          </main>
        </SnakeGameProvider>
      </body>
    </html>
  );
}
