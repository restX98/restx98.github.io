import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";

import { SnakeGameProvider, SnakeHouse } from "@restx98/snake-house-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import { siteConfig } from "@/config/site";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export async function generateStaticParams() {
  return siteConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={inter.variable}>
        <SnakeGameProvider>
          <NextIntlClientProvider messages={messages}>
            <main className="fixed inset-0 flex h-dvh w-screen flex-col bg-primary-800">
              <Navbar className="flex-none" />
              <div className="flex-auto">
                <SnakeHouse className="container py-6">{children}</SnakeHouse>
              </div>
              <Footer className="flex-none" />
            </main>
          </NextIntlClientProvider>
        </SnakeGameProvider>
      </body>
    </html>
  );
}
