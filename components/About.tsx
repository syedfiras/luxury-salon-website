// components/About.tsx
'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="about" className="py-24 px-6 bg-gradient-luxury">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-display mt-4 mb-6">Where Art Meets Beauty</h2>
          <div className="w-20 h-0.5 gold-gradient mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-display mb-4 text-gold">The LUXE Experience</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Founded in 2015, LUXE Studio has redefined luxury beauty services. 
                Our award-winning team of artists combines technical precision with 
                artistic vision to create transformative experiences.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
                    <span className="text-luxury-black font-bold">★</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Premium Products</h4>
                    <p className="text-sm text-gray-400">Only the finest brands</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
                    <span className="text-luxury-black font-bold">★</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Master Stylists</h4>
                    <p className="text-sm text-gray-400">Internationally trained</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
                    <span className="text-luxury-black font-bold">★</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Luxury Atmosphere</h4>
                    <p className="text-sm text-gray-400">Serene & sophisticated</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="glassmorphism rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800"
                alt="Luxury Salon Interior"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-sm italic">"Where every visit is a masterpiece"</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About