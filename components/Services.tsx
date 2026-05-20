'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  { name: 'Hair Styling', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80', desc: 'Precision cuts & editorial styling', price: 'From $120' },
  { name: 'Hair Coloring', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80', desc: 'Balayage, ombre & color correction', price: 'From $200' },
  { name: 'Facial Treatments', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80', desc: 'Anti-aging & deep cleansing', price: 'From $150' },
  { name: 'Makeup Artistry', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80', desc: 'Bridal & editorial makeup', price: 'From $180' },
  { name: 'Nail Care', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80', desc: 'Gel, acrylic & spa manicure', price: 'From $80' },
  { name: 'Spa & Wellness', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80', desc: 'Massage & body treatments', price: 'From $160' },
  { name: 'Grooming', image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80', desc: 'Precision beard & haircut', price: 'From $90' },
  { name: 'Bridal Package', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', desc: 'Complete wedding day look', price: 'From $500' },
]

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-16 md:py-24 px-4 sm:px-6 bg-luxury-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] bg-gold/3 rounded-full blur-[80px] sm:blur-[100px]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="section-tag">Premium Services</span>
          <h2 className="section-title">Luxury Treatments</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Indulge in our curated menu of world-class beauty services
          </p>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass-card text-center group cursor-pointer relative overflow-hidden"
              onClick={scrollToBooking}
            >
              {/* Hover Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-xl font-display mb-2 text-gold relative z-10">{service.name}</h3>
              <p className="text-gray-400 text-sm mb-3 relative z-10">{service.desc}</p>
              <p className="text-gold-light font-semibold relative z-10">{service.price}</p>
              <button className="mt-4 text-sm text-gold hover:text-goldLight transition-colors relative z-10 group/btn">
                <span className="inline-flex items-center gap-1">
                  Book Now
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
