import { siteConfig } from '@/config/site'

import { Inter } from 'next/font/google'
import './globals.css'

import { SnakeGameProvider } from '@/context/snake-game-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <main>
          <SnakeGameProvider>
            {children}
          </SnakeGameProvider>
        </main>
      </body >
    </html >
  )
}
