'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Victoria Hamilton',
    role: 'Regular color client',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    text: 'I came in after a difficult color experience elsewhere. They slowed the process down, explained what was realistic, and my hair finally feels like mine again.',
    rating: 5,
  },
  {
    name: 'James Whitmore',
    role: 'Monthly grooming client',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    text: 'What keeps me coming back is the consistency. The cut is sharp without looking overdone, and the room has a calmness that makes the hour feel useful.',
    rating: 5,
  },
  {
    name: 'Charlotte Chen',
    role: 'Ceremony client',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80',
    text: 'For my ceremony, I wanted to still look like myself. The trial was thoughtful, the timing was clear, and on the day I felt composed instead of fussed over.',
    rating: 5,
  },
  {
    name: 'Amara Osei',
    role: 'Production client',
    image: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=150&q=80',
    text: 'My schedule changes constantly, but they always keep the service grounded. The finish reads beautifully on camera and still feels natural in person.',
    rating: 5,
  },
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (idx: number) => setCurrent(idx)

  return (
    <section className="section-padding bg-gradient-luxury relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[600px] sm:h-[600px] bg-gold/5 rounded-full blur-[80px] sm:blur-[120px]" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-tag">Client Stories</span>
          <h2 className="section-title">What Clients Notice</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="glass-card text-center p-6 sm:p-10 md:p-16 relative"
            >
              {/* Decorative Quote */}
              <div className="absolute top-6 left-6 text-6xl text-gold/20 font-display leading-none">
                &ldquo;
              </div>
              <div className="absolute bottom-6 right-6 text-6xl text-gold/20 font-display leading-none">
                &rdquo;
              </div>

              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    width={80}
                    height={80}
                    sizes="80px"
                    className="w-20 h-20 rounded-full object-cover border-2 border-gold"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gold rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-luxury-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-1 mb-6" aria-label={`${testimonials[current].rating} out of 5 stars`}>
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-gold text-xl"
                    aria-hidden="true"
                  >
                    &#9733;
                  </motion.span>
                ))}
              </div>

              <p className="text-gray-200 text-base sm:text-lg md:text-xl italic mb-8 leading-relaxed max-w-3xl mx-auto">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              <h4 className="text-2xl font-display text-gold">{testimonials[current].name}</h4>
              <p className="text-sm text-gray-400 mt-1">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((testimonial, idx) => (
              <button
                key={testimonial.name}
                onClick={() => goTo(idx)}
                aria-label={`Show testimonial from ${testimonial.name}`}
                aria-pressed={idx === current}
                className={`transition-all duration-300 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${
                  idx === current
                    ? 'w-10 h-2 bg-gold'
                    : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/5"
          >
            {['Consultation-led', 'Established 2015', 'Senior-led services', 'Selected product partners'].map((indicator) => (
              <div key={indicator} className="flex items-center gap-2 text-gray-500 text-sm">
                <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {indicator}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
