import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer, Navbar } from '@/components/common'
import { Setup } from '@/components/utils' // Toast component.
import Provider from '@/redux/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Beckoning Bell',
  description: 'A cooperative platform for subreddit moderators.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Setup />
          <Navbar />
            <div>{children}</div>
          <Footer />
        </Provider>
        </body>
    </html>
  )
}

// npm run build to test production build.