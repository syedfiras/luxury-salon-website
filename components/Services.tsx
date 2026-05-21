'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { getScrollBehavior } from '@/lib/scroll'

const services = [
  { name: 'Cut & Finish', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80', desc: 'Shape, movement, and a finish that grows out softly', price: 'From $120' },
  { name: 'Color Work', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80', desc: 'Dimensional color, glossing, and thoughtful correction', price: 'From $200' },
  { name: 'Skin Rituals', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80', desc: 'Facials tailored to texture, hydration, and recovery', price: 'From $150' },
  { name: 'Makeup', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80', desc: 'Camera-aware makeup for events, portraits, and ceremony days', price: 'From $180' },
  { name: 'Hands & Feet', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80', desc: 'Quiet nail care with refined color and clean detailing', price: 'From $80' },
  { name: 'Body Care', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80', desc: 'Massage and body treatments for release and reset', price: 'From $160' },
  { name: 'Grooming', image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80', desc: 'Tailored cuts, beard shaping, and scalp care', price: 'From $90' },
  { name: 'Ceremony Edit', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', desc: 'Trial, timing plan, and day-of beauty for intimate occasions', price: 'From $500' },
]

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: getScrollBehavior() })
    }
  }

  return (
    <section id="services" className="section-padding bg-atelier-quiet relative overflow-hidden">
      <div className="ambient-boundary" />
      <div className="ambient-floor" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="section-tag">Service Menu</span>
          <h2 className="section-title">Considered Care</h2>
          <p className="section-copy">
            A focused menu for hair, skin, grooming, and occasion beauty, each guided by consultation and restraint.
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
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="glass-card group relative overflow-hidden text-left"
            >
              <div className="relative mb-5 h-52 w-full overflow-hidden rounded-lg sm:h-48">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover premium-media"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-display mb-2 text-gold relative z-10">{service.name}</h3>
              <p className="text-gray-400 text-sm leading-6 mb-3 relative z-10">{service.desc}</p>
              <p className="text-gold-light font-semibold relative z-10">{service.price}</p>
              <button
                type="button"
                onClick={scrollToBooking}
                className="mt-4 text-sm text-gold hover:text-goldLight transition-colors relative z-10 group/btn focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                <span className="inline-flex items-center gap-1">
                  Reserve
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
