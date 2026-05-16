'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  { name: 'Hair Styling', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600', desc: 'Precision cuts & editorial styling', price: 'From $120' },
  { name: 'Hair Coloring', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600', desc: 'Balayage, ombre & color correction', price: 'From $200' },
  { name: 'Facial Treatments', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600', desc: 'Anti-aging & deep cleansing', price: 'From $150' },
  { name: 'Makeup Artistry', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600', desc: 'Bridal & editorial makeup', price: 'From $180' },
  { name: 'Nail Care', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600', desc: 'Gel, acrylic & spa manicure', price: 'From $80' },
  { name: 'Spa & Wellness', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600', desc: 'Massage & body treatments', price: 'From $160' },
  { name: 'Grooming', image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600', desc: 'Precision beard & haircut', price: 'From $90' },
  { name: 'Bridal Package', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600', desc: 'Complete wedding day look', price: 'From $500' },
]

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-24 px-6 bg-luxury-black">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Premium Services</span>
          <h2 className="text-4xl md:text-5xl font-display mt-4 mb-6">Luxury Treatments</h2>
          <div className="w-20 h-0.5 gold-gradient mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass-card text-center group cursor-pointer"
              onClick={scrollToBooking}
            >
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-display mb-2 text-gold">{service.name}</h3>
              <p className="text-gray-400 text-sm mb-3">{service.desc}</p>
              <p className="text-goldLight font-semibold">{service.price}</p>
              <button className="mt-4 text-sm text-gold hover:text-goldLight transition-colors">
                Book Now →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services