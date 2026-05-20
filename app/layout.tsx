import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import LoadingScreen from '@/components/LoadingScreen'

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
  title: 'LUXE STUDIO | Premium Salon Experience',
  description: 'Experience the pinnacle of luxury beauty services. Where artistry meets elegance.',
  keywords: 'luxury salon, premium beauty, hairstyling, spa, bridal makeup, New York salon',
  openGraph: {
    title: 'LUXE STUDIO | Premium Salon Experience',
    description: 'Experience the pinnacle of luxury beauty services.',
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
        <LoadingScreen />
        {children}
      </body>
    </html>
  )
}
