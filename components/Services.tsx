'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const services = [
  { id: '01', name: 'Cut & Finish', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80', desc: 'Shape, movement, and a finish that grows out softly', price: '$120' },
  { id: '02', name: 'Color Work', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80', desc: 'Dimensional color, glossing, and thoughtful correction', price: '$200' },
  { id: '03', name: 'Skin Rituals', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80', desc: 'Facials tailored to texture, hydration, and recovery', price: '$150' },
  { id: '04', name: 'Makeup Edit', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80', desc: 'Camera-aware makeup for events, portraits, and ceremony days', price: '$180' },
  { id: '05', name: 'Hands & Feet', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80', desc: 'Quiet nail care with refined color and clean detailing', price: '$80' },
  { id: '06', name: 'Body Care', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80', desc: 'Massage and body treatments for release and reset', price: '$160' },
  { id: '07', name: 'Grooming', image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80', desc: 'Tailored cuts, beard shaping, and scalp care', price: '$90' },
  { id: '08', name: 'Ceremony Edit', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', desc: 'Trial, timing plan, and day-of beauty for intimate occasions', price: '$500' },
]

export default function Services() {
  const containerRef = useRef<HTMLElement>(null)
  const isContainerInView = useInView(containerRef, { once: true, amount: 0.1 })
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative min-h-screen bg-[#0B0B0B] py-28 md:py-40 px-6 lg:px-16 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-28 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="section-label">Service Menu</span>
              <span className="accent-line" />
            </div>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-[#F5F4F0] text-3xl md:text-6xl font-light leading-none"
            >
              Considered Care.
            </h2>
          </div>
          <p className="text-[#9E9E9E] font-light max-w-md text-sm md:text-base leading-relaxed">
            A focused menu for hair, skin, grooming, and occasion beauty, each guided by personal consultation and restraint.
          </p>
        </div>

        {/* Horizontal Rows List */}
        <div className="border-t border-white/10 relative">
          {services.map((service, index) => (
            <div
              key={service.name}
              onMouseEnter={() => setHoveredIdx(index)}
              onMouseLeave={() => setHoveredIdx(null)}
              onMouseMove={handleMouseMove}
              onClick={scrollToContact}
              className="relative py-10 md:py-12 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer group transition-colors duration-500 hover:bg-[#151515]/40 px-4 md:px-8"
            >
              {/* Left Column: Number & Name */}
              <div className="flex items-baseline gap-6 md:gap-10">
                <span
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-[#B8925C] text-sm md:text-base tracking-widest font-light"
                >
                  {service.id}
                </span>
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-2xl md:text-4xl text-[#F5F4F0] font-light group-hover:translate-x-2 transition-transform duration-500"
                >
                  {service.name}
                </h3>
              </div>

              {/* Center Column: Description */}
              <p className="text-[#9E9E9E] font-light text-xs md:text-sm max-w-sm lg:max-w-md leading-relaxed">
                {service.desc}
              </p>

              {/* Right Column: Price & Action */}
              <div className="flex items-center justify-between md:justify-end gap-12">
                <span
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-[#B8925C] text-lg md:text-xl font-light"
                >
                  {service.price}
                </span>
                <span className="text-xl text-[#B8925C] opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-500">
                  →
                </span>
              </div>

              {/* Structural Background huge number */}
              <div className="service-number opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                {service.id}
              </div>

              {/* Floating Image reveal on hover */}
              <AnimatePresence>
                {hoveredIdx === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 15 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: mousePos.x - 140, // offset to center image
                      y: mousePos.y - 180,
                    }}
                    exit={{ opacity: 0, scale: 0.9, y: 15 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 250 }}
                    className="absolute pointer-events-none z-30 hidden lg:block w-72 aspect-[3/4] overflow-hidden border border-[#B8925C]/20 shadow-2xl"
                  >
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="288px"
                      className="object-cover scale-105 group-hover:scale-100 transition-transform duration-[1.5s]"
                    />
                    <div className="absolute inset-0 bg-[#0B0B0B]/10" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
