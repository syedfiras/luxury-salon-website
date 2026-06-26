import SmoothScroll from '@/components/SmoothScroll'
import CustomCursor from '@/components/CustomCursor'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Materials from '@/components/Materials'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import ClientJourney from '@/components/ClientJourney'
import Experts from '@/components/Experts'
import ContactLocation from '@/components/ContactLocation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#0B0B0B] text-[#F5F4F0]">
      {/* Smooth scroll driver */}
      <SmoothScroll />

      {/* Lag-based custom cursor */}
      <CustomCursor />

      {/* Primary navigation */}
      <Navbar />

      {/* Section segments */}
      <Hero />
      <About />
      <Services />
      <Materials />
      <Gallery />
      <Testimonials />
      <ClientJourney />
      <Experts />
      <ContactLocation />

      {/* Footer info */}
      <Footer />
    </main>
  )
}
