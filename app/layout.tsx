import type { Metadata } from 'next'
import { Cormorant_Garamond, Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
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
    <html lang="en" className={`${cormorant.variable} ${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#0B0B0B] text-[#F5F4F0] antialiased">
        {children}
      </body>
    </html>
  )
}
