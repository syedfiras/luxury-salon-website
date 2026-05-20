'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Experts from '@/components/Experts'
import Booking from '@/components/Booking'
import Testimonials from '@/components/Testimonials'
import Gallery from '@/components/Gallery'
import Pricing from '@/components/Pricing'
import ContactLocation from '@/components/ContactLocation'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      wheelMultiplier: 1.2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experts />
      <Testimonials />
      <Gallery />
      <Pricing />
      <Booking />
      <ContactLocation />
      <Footer />
      <ScrollToTop />
      <FloatingWhatsApp />
    </main>
  )
}
