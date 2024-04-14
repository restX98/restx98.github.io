import { siteConfig } from '@/config/site'

import { Inter } from 'next/font/google'
import './globals.css'

import { SnakeHouse } from '@/components/snake-house'

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
          <SnakeHouse />
          {children}
        </main>
      </body >
    </html >
  )
}
