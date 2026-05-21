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
  const activeTestimonial = testimonials[current]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (idx: number) => setCurrent(idx)

  return (
    <section className="section-padding bg-atelier-charcoal relative overflow-hidden">
      <div className="ambient-boundary" />
      <div className="ambient-floor" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header max-w-3xl"
        >
          <span className="section-tag">Client Stories</span>
          <h2 className="section-title">What Clients Notice</h2>
          <p className="section-copy">
            Small details, remembered over time. The measure of the studio is how people feel when they leave, and how the work lives after the appointment.
          </p>
          <div className="section-divider" />
        </motion.div>

        <div className="relative max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative rounded-lg border border-white/[0.07] bg-black/[0.12] p-6 shadow-[0_24px_60px_-48px_rgba(0,0,0,0.85)] sm:p-8 md:p-9"
            >
              <div className="mb-5 flex items-center gap-4 sm:mb-6 sm:gap-5">
                <div className="relative shrink-0">
                  <Image
                    src={activeTestimonial.image}
                    alt={activeTestimonial.name}
                    width={72}
                    height={72}
                    sizes="72px"
                    className="h-16 w-16 rounded-full border border-gold/30 object-cover grayscale-[20%] sm:h-[72px] sm:w-[72px]"
                  />
                </div>
                <div>
                  <h4 className="font-display text-xl text-gold sm:text-2xl">{activeTestimonial.name}</h4>
                  <p className="mt-1 text-sm text-gray-500">{activeTestimonial.role}</p>
                </div>
              </div>

              <p className="max-w-3xl text-left font-display text-lg leading-[1.45] text-gray-100 sm:text-xl md:text-2xl md:leading-[1.38]">
                <span className="text-gold/50">&ldquo;</span>{activeTestimonial.text}<span className="text-gold/50">&rdquo;</span>
              </p>

              <div className="mt-5 flex gap-1.5" aria-label={`${activeTestimonial.rating} out of 5 stars`}>
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <span key={i} className="text-sm text-gold/70" aria-hidden="true">
                    &#9733;
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-7 flex justify-start gap-3">
            {testimonials.map((testimonial, idx) => (
              <button
                key={testimonial.name}
                onClick={() => goTo(idx)}
                aria-label={`Show testimonial from ${testimonial.name}`}
                aria-pressed={idx === current}
                className={`h-11 min-w-11 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${
                  idx === current
                    ? 'border border-gold/60 bg-gold/10 px-4 text-xs text-gold'
                    : 'border border-white/10 px-3 text-xs text-gray-500 hover:border-white/20 hover:text-gray-300'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 grid grid-cols-2 gap-x-5 gap-y-3 border-t border-white/[0.06] pt-6 sm:flex sm:flex-wrap sm:gap-x-8"
          >
            {['Consultation-led', 'Established 2015', 'Senior-led services', 'Selected product partners'].map((indicator) => (
              <div key={indicator} className="flex items-center gap-2 text-sm text-gray-500">
                <svg className="h-3.5 w-3.5 shrink-0 text-gold/70" fill="currentColor" viewBox="0 0 20 20">
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
