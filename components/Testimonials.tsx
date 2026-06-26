'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Victoria Hamilton',
    role: 'Regular Color Client',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80',
    text: 'I came in after a difficult color experience elsewhere. They slowed the process down, explained what was realistic, and my hair finally feels like mine again.',
  },
  {
    name: 'James Whitmore',
    role: 'Monthly Grooming Client',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',
    text: 'What keeps me coming back is the consistency. The cut is sharp without looking overdone, and the room has a calmness that makes the hour feel useful.',
  },
  {
    name: 'Charlotte Chen',
    role: 'Ceremony Client',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&q=80',
    text: 'For my ceremony, I wanted to still look like myself. The trial was thoughtful, the timing was clear, and on the day I felt composed instead of fussed over.',
  },
  {
    name: 'Amara Osei',
    role: 'Production Client',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80',
    text: 'My schedule changes constantly, but they always keep the service grounded. The finish reads beautifully on camera and still feels natural in person.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="testimonials"
      className="relative bg-[#151515] min-h-[80vh] py-28 md:py-40 px-6 lg:px-16 flex items-center overflow-hidden border-t border-white/5"
    >
      {/* Editorial layout lines */}
      <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white/5 hidden lg:block" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center z-10">
        
        {/* Left Column: Big elegant Quote */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-8">
            <span className="section-label">Client Stories</span>
            <span className="accent-line" />
          </div>

          <div className="relative min-h-[220px] md:min-h-[260px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full"
              >
                <p
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-2xl md:text-5xl italic text-[#F5F4F0] font-light leading-snug tracking-wide"
                >
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                <div className="mt-8 flex items-baseline gap-4">
                  <span
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-[#B8925C] text-lg font-light"
                  >
                    {testimonials[current].name}
                  </span>
                  <span className="text-[10px] tracking-widest text-[#9E9E9E] uppercase font-sans font-light">
                    {testimonials[current].role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Minimal pagination dot indicators */}
          <div className="mt-12 flex gap-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className="group p-2 focus-visible:outline-none"
                aria-label={`Go to testimonial ${idx + 1}`}
                data-cursor
              >
                <span className={`block w-8 h-[1px] transition-all duration-500 ${idx === current ? 'bg-[#B8925C] w-14' : 'bg-white/20'}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Fading elegant portrait */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm aspect-[4/5] overflow-hidden border border-white/5 img-mask">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover grayscale-[30%] brightness-[90%]"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-[#0B0B0B]/10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
