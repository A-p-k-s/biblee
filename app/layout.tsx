import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'YouVersion - Bible App',
  description: 'Encouraging and challenging you to seek intimacy with God every day.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}