import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "../globals.css"
import {ClerkProvider} from '@clerk/nextjs'

export const metadata: Metadata = {
  title: 'Threads',
  description: 'A thread-clone app with next.js',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <ClerkProvider>
        <html lang="en">
            <body className={`${inter.className} bg-dark-1`}>
                {children}
            </body>
        </html>
      </ClerkProvider> 
  )
}
