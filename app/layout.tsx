// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import LoadingScreen from '@/components/LoadingScreen'

export const metadata: Metadata = {
  title: 'LUXE | Premium Salon Experience',
  description: 'Experience the pinnacle of luxury beauty services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-luxury-black">
        <LoadingScreen />
        {children}
      </body>
    </html>
  )
}