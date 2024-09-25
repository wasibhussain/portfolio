import './globals.css'
import type { Metadata } from 'next'
import { Saira } from 'next/font/google'

import Providers from './providers'

const saira = Saira({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Wasib Zameer',
  description: 'Portfolio of Wasib Zameer',
  verification: {
    google: 'NK_YRyzH-6vt7WN_fUlh27kl9Rbv60jNBhDY_H7oLb8'
  }
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
