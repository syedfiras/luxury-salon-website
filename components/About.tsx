'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Image from 'next/image'

const stats = [
  { value: '2015', label: 'Studio Established' },
  { value: '12', label: 'Artists and Therapists' },
  { value: '40 min', label: 'Reserved Consultation' },
  { value: '1:1', label: 'Personal Appointment Flow' },
]

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="about" className="section-padding bg-atelier-black relative overflow-hidden">
      <div className="ambient-boundary" />
      <div className="ambient-floor" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="section-tag">Our Story</span>
          <h2 className="section-title">A Studio Built for Attention</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left - Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] gold-gradient" />
                <span className="text-gold text-sm tracking-wider uppercase">Since 2015</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-display mb-4 text-gold">The LUXE Way</h3>

              <p className="text-gray-300 leading-relaxed mb-6">
                Founded in New York, <span className="text-gold">LUXE Studio</span> is a small salon and spa atelier
                shaped around considered appointments. We begin with listening, then build each service with
                proportion, texture, skin tone, lifestyle, and maintenance in mind.
              </p>

              <p className="text-gray-400 leading-relaxed mb-8 text-sm italic">
                &ldquo;Our work is at its best when it looks effortless a week later. The aim is not to
                transform someone into someone else, but to make them feel more settled in themselves.&rdquo;
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
                    <h4 className="font-semibold text-white">Product Discipline</h4>
                    <p className="text-sm text-gray-400">Care formulas are chosen for hair history, skin needs, and finish</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-luxury-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Experienced Hands</h4>
                    <p className="text-sm text-gray-400">Senior artists with specialist training and a consultation-first approach</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-luxury-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Unhurried Setting</h4>
                    <p className="text-sm text-gray-400">Private pacing, soft service, and enough time to feel looked after</p>
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
            <div className="glassmorphism rounded-xl overflow-hidden relative group">
              <div className="relative aspect-[4/5] min-h-[340px] sm:min-h-[420px] md:min-h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
                  alt="Calm salon interior with styling chairs and warm light"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover premium-media"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent" />

              {/* Quote Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-start gap-3">
                  <span className="text-4xl text-gold leading-none">&ldquo;</span>
                  <p className="text-white/90 text-sm italic leading-relaxed">
                    Quiet appointments, careful hands, and results that feel lived-in.
                  </p>
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-0 border border-white/5 rounded-xl pointer-events-none" />
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
                  <div className="text-2xl md:text-3xl font-display font-bold text-gold mb-1 group-hover:scale-[1.04] transition-transform duration-300 ease-out">
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
