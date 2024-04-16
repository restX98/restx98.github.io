import { siteConfig } from '@/config/site'
import { items } from '@/config/menu'

import { Inter } from 'next/font/google'
import './globals.css'

import { SnakeGameProvider } from '@/context/snake-game-context'
import { Navbar } from '@/components/navbar'
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
        <SnakeGameProvider>
          <main className='flex flex-col min-h-screen max-h-screen min-w-screen max-w-screen overflow-hidden bg-zinc-800'>
            <Navbar className="flex-none" items={items} />
            <SnakeHouse className='flex-auto' />
            {children}
          </main>
        </SnakeGameProvider>
      </body >
    </html >
  )
}
