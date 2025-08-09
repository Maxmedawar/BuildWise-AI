import './globals.css'
import type { ReactNode } from 'react'

export const metadata = { title: 'BuildWise AI' }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}
