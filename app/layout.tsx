import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bele Reis - Personal Trainer',
  description: 'Te ajudo a recuperar sua saúde e autoestima.',
  generator: 'v0.dev',
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
