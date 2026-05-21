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
import SmoothScroll from '@/components/SmoothScroll'
import MotionPreferences from '@/components/MotionPreferences'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <MotionPreferences>
        <SmoothScroll />
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
      </MotionPreferences>
    </main>
  )
}
