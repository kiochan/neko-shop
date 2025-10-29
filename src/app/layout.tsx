import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import { UserProvider } from '@/features/auth'
import { getCurrentUser } from '@/features/auth/server'
import { SiteSettings } from '@/shared/settings/site.const'

import './globals.css'

const { title, description } = SiteSettings

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = { title, description }

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const user = await getCurrentUser()

  return (
    <html lang="en">
      <UserProvider user={user}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
        </body>
      </UserProvider>
    </html>
  )
}
