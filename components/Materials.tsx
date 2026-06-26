'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const materials = [
  {
    name: 'Raw Wood',
    desc: 'Unlacquered solid white oak and walnut paneling, grounding our salon space with organic grain textures that age with grace.',
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Honed Marble',
    desc: 'Deep veined Calacatta marble slabs on our styling wash stations, offering a cool, timeless tactile connection during skin rituals.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Brushed Brass',
    desc: 'Hand-scratched hardware details on custom fixtures, reflecting warm structural accent tones and timeless craftsmanship.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Architectural Light',
    desc: 'Soft, indirect lighting designed to replicate natural clean sunlight, respecting skin tones and soothing visual exhaustion.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Raw Flax Linen',
    desc: 'Organic linen drapes filtering New York light, creating soft privacy bounds while maintaining physical spatial connection.',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop',
  },
]

export default function Materials() {
  const containerRef = useRef<HTMLElement>(null)
  const isContainerInView = useInView(containerRef, { once: true, amount: 0.15 })

  return (
    <section
      ref={containerRef}
      id="materials"
      className="relative bg-[#151515] py-28 md:py-40 px-6 lg:px-16 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 md:mb-28 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="section-label">Materiality & Craft</span>
            <span className="accent-line" />
          </div>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-[#F5F4F0] text-3xl md:text-6xl font-light leading-tight mb-6"
          >
            The Texture of Serenity.
          </h2>
          <p className="text-[#9E9E9E] font-light text-sm md:text-base leading-relaxed">
            Our atelier environment is hand-built with premium, organic materials selected for physical connection, sensory calm, and timeless architectural integrity.
          </p>
        </div>

        {/* Horizontal scroll / Stacked Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {materials.map((mat, index) => (
            <motion.div
              key={mat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col justify-between h-full bg-[#1C1C1C] border border-white/5 p-6 hover:border-[#B8925C]/30 transition-colors duration-500"
            >
              <div>
                {/* Image element with elegant overlay */}
                <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 border border-white/5">
                  <Image
                    src={mat.image}
                    alt={mat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-[1.2s]"
                  />
                  <div className="absolute inset-0 bg-[#0B0B0B]/10 group-hover:opacity-0 transition-opacity" />
                </div>

                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-[#F5F4F0] text-xl md:text-2xl font-light mb-4"
                >
                  {mat.name}
                </h3>
              </div>

              <p className="text-[#9E9E9E] font-light text-xs leading-relaxed">
                {mat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
