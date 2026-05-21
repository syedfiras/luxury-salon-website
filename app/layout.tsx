import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'LUXE STUDIO | Salon and Spa Atelier',
  description: 'A calm New York salon and spa atelier for considered hair, skin, grooming, and occasion beauty.',
  keywords: 'luxury salon, salon atelier, hairstyling, spa, bridal makeup, New York salon',
  openGraph: {
    title: 'LUXE STUDIO | Salon and Spa Atelier',
    description: 'Considered hair, skin, grooming, and occasion beauty in New York.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-luxury-black antialiased">
        {children}
      </body>
    </html>
  )
}
