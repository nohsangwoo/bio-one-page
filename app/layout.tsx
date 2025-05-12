import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '바이오 테크놀로지',
  description: 'Created with Ludgi',
  generator: 'ludgi.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
