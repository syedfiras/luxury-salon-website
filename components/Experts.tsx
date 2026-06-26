'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const experts = [
  {
    name: 'Isabella Rossi',
    role: 'Creative Director & Master Stylist',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80',
    exp: '15 Years',
    specialty: 'Shape & proportion styling',
    note: 'Known for soft structure, quiet corrections, and cuts that keep their shape.',
  },
  {
    name: 'Michael Chen',
    role: 'Senior Colorist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80',
    exp: '12 Years',
    specialty: 'Low-contrast dimensional color',
    note: 'Builds lived-in tone with restraint, gloss, and careful maintenance planning.',
  },
  {
    name: 'Sophia Laurent',
    role: 'Lead Makeup Artist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&q=80',
    exp: '10 Years',
    specialty: 'Invisible skin occasion finish',
    note: 'Keeps skin visible and composed for ceremonies, portraits, and long days.',
  },
  {
    name: 'David Kim',
    role: 'Spa Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&q=80',
    exp: '8 Years',
    specialty: 'Nervous-system restore rituals',
    note: 'Designs restorative rituals around texture, tension, and nervous-system ease.',
  },
]

export default function Experts() {
  const containerRef = useRef<HTMLElement>(null)
  const isContainerInView = useInView(containerRef, { once: true, amount: 0.15 })

  return (
    <section
      ref={containerRef}
      id="experts"
      className="relative bg-[#151515] py-28 md:py-40 px-6 lg:px-16 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 md:mb-28 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="section-label">The Atelier Team</span>
            <span className="accent-line" />
          </div>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-[#F5F4F0] text-3xl md:text-6xl font-light leading-none mb-6"
          >
            Atelier Hands.
          </h2>
          <p className="text-[#9E9E9E] font-light text-sm md:text-base leading-relaxed">
            Senior artists and therapists who bring technical discipline, calm presence, and honest structural guidance to every private session.
          </p>
        </div>

        {/* Staggered Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {experts.map((exp, index) => (
            <motion.div
              key={exp.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`group flex flex-col justify-between border border-white/5 p-5 bg-[#1C1C1C] hover:border-[#B8925C]/30 transition-all duration-500 ${index % 2 === 1 ? 'lg:translate-y-8' : ''}`}
            >
              {/* Image & Experience Badge */}
              <div className="relative aspect-[4/5] w-full overflow-hidden mb-6 border border-white/5">
                <Image
                  src={exp.image}
                  alt={exp.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-[1.5s]"
                />
                <div className="absolute inset-0 bg-[#0B0B0B]/20 group-hover:opacity-0 transition-opacity" />
                <span className="absolute bottom-4 left-4 bg-[#0B0B0B]/80 text-[#B8925C] text-[9px] tracking-widest uppercase px-3 py-1.5 border border-[#B8925C]/20 backdrop-blur-sm">
                  {exp.exp}
                </span>
              </div>

              {/* Info details */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-[#F5F4F0] text-xl md:text-2xl font-light mb-1"
                  >
                    {exp.name}
                  </h3>
                  <span className="text-[10px] tracking-widest text-[#B8925C] uppercase font-sans font-light block mb-4">
                    {exp.role}
                  </span>
                  <p className="text-[#9E9E9E] font-light text-xs leading-relaxed mb-6">
                    {exp.note}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <span className="text-[9px] tracking-widest text-[#9E9E9E] uppercase block mb-1">Specialty</span>
                  <span className="text-[#F5F4F0] font-light text-xs">{exp.specialty}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
