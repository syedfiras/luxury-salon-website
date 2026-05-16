// components/Testimonials.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Victoria Hamilton',
    role: 'Fashion Executive',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    text: 'The most exquisite salon experience I have ever had. The attention to detail and artistry is unmatched.',
    rating: 5
  },
  {
    name: 'James Whitmore',
    role: 'Entrepreneur',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    text: 'World-class service from start to finish. The ambiance, the team, the results - absolutely flawless.',
    rating: 5
  },
  {
    name: 'Charlotte Chen',
    role: 'Bridal Client',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    text: 'They made my wedding day absolutely perfect. I felt like a queen. Thank you LUXE team!',
    rating: 5
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

  return (
    <section className="py-24 px-6 bg-gradient-luxury">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Client Stories</span>
          <h2 className="text-4xl md:text-5xl font-display mt-4 mb-6">Luxury Experiences</h2>
          <div className="w-20 h-0.5 gold-gradient mx-auto"></div>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-card text-center p-12"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-gold"
                />
              </div>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 text-lg italic mb-6">"{testimonials[current].text}"</p>
              <h4 className="text-xl font-display text-gold">{testimonials[current].name}</h4>
              <p className="text-sm text-gray-400">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === current ? 'w-8 bg-gold' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials