'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const stats = [
  { value: '10+', label: 'Years of Excellence' },
  { value: '15K+', label: 'Happy Clients' },
  { value: '50+', label: 'Awards Won' },
  { value: '98%', label: 'Satisfaction Rate' },
]

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="about" className="py-24 px-6 bg-gradient-luxury relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gold/3 rounded-full blur-[80px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="section-tag">Our Story</span>
          <h2 className="section-title">Where Art Meets Beauty</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] gold-gradient" />
                <span className="text-gold text-sm tracking-wider uppercase">Since 2015</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-display mb-4 text-gold">The LUXE Experience</h3>

              <p className="text-gray-300 leading-relaxed mb-6">
                Founded in the heart of New York City, <span className="text-gold">LUXE Studio</span> was born 
                from a vision to redefine luxury beauty. Our award-winning team of master artists combines 
                technical precision with artistic vision to create transformative experiences that transcend 
                the ordinary.
              </p>

              <p className="text-gray-400 leading-relaxed mb-8 text-sm italic">
                &ldquo;Every client who walks through our doors deserves nothing less than a masterpiece. 
                We don&apos;t just style hair — we craft confidence, elegance, and timeless beauty.&rdquo;
              </p>

              {/* Values */}
              <div className="space-y-5">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-luxury-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Premium Products</h4>
                    <p className="text-sm text-gray-400">Only the finest luxury brands from around the world</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-luxury-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Master Stylists</h4>
                    <p className="text-sm text-gray-400">Internationally trained and award-winning artists</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-luxury-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Luxury Atmosphere</h4>
                    <p className="text-sm text-gray-400">A serene sanctuary designed for pure indulgence</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="glassmorphism rounded-2xl overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
                alt="Luxury Salon Interior"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent" />

              {/* Quote Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-start gap-3">
                  <span className="text-4xl text-gold leading-none">&ldquo;</span>
                  <p className="text-white/90 text-sm italic leading-relaxed">
                    Where every visit is a masterpiece, and every client is a muse.
                  </p>
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                  className="glassmorphism rounded-xl p-4 text-center group hover:border-gold/30 transition-all duration-300"
                >
                  <div className="text-2xl md:text-3xl font-display font-bold text-gold mb-1 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 tracking-wider uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
