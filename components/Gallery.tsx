'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1000&q=90',
    title: 'Soft Structure',
    desc: 'Movement sculpted for daily ease.',
    size: 'lg:col-span-8 aspect-[16/9]',
  },
  {
    url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1000&q=90',
    title: 'Dimensional Tone',
    desc: 'Low-contrast warmth through the lengths.',
    size: 'lg:col-span-4 aspect-[3/4]',
  },
  {
    url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1000&q=90',
    title: 'Silent Atelier',
    desc: 'A serene corner designed for listening.',
    size: 'lg:col-span-4 aspect-[3/4]',
  },
  {
    url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1000&q=90',
    title: 'Sculpted Waves',
    desc: 'Bending natural textures without heavy sealants.',
    size: 'lg:col-span-8 aspect-[16/10]',
  },
  {
    url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1000&q=90',
    title: 'Gloss and Shine',
    desc: 'Reflective structural depth.',
    size: 'lg:col-span-6 aspect-[4/3]',
  },
  {
    url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1000&q=90',
    title: 'Clean Detailing',
    desc: 'Care centered on basic proportions.',
    size: 'lg:col-span-6 aspect-[4/3]',
  },
]

export default function Gallery() {
  const containerRef = useRef<HTMLElement>(null)
  const isContainerInView = useInView(containerRef, { once: true, amount: 0.05 })
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  // Escape key close
  useEffect(() => {
    if (selectedIdx === null) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIdx(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIdx])

  return (
    <section
      ref={containerRef}
      id="gallery"
      className="relative bg-[#0B0B0B] py-28 md:py-40 px-6 lg:px-16 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 md:mb-28">
          <div className="flex items-center gap-3 mb-6">
            <span className="section-label">Gallery Portfolio</span>
            <span className="accent-line" />
          </div>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-[#F5F4F0] text-3xl md:text-6xl font-light leading-none"
          >
            Visual Chronicles.
          </h2>
        </div>

        {/* Offset Composition Masonry-Like Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.url}
              initial={{ opacity: 0, y: 40 }}
              animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedIdx(idx)}
              className={`${img.size} relative overflow-hidden group cursor-pointer border border-white/5`}
              data-cursor
            >
              {/* Image container with mask effect and Ken Burns continuous slow scaling */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={img.url}
                  alt={img.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[4s] ease-out group-hover:scale-[1.03]"
                />
                {/* Visual shadow layer */}
                <div className="absolute inset-0 bg-[#0B0B0B]/20 group-hover:bg-[#0B0B0B]/0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>

              {/* Minimal caption overlays */}
              <div className="absolute bottom-6 left-6 right-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-lg md:text-xl text-[#F5F4F0] font-light mb-1"
                >
                  {img.title}
                </h3>
                <p className="text-xs text-[#9E9E9E] font-light leading-relaxed">
                  {img.desc}
                </p>
              </div>

              {/* Minimal architectural border indicators */}
              <div className="absolute inset-3 border border-white/0 group-hover:border-white/5 pointer-events-none transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modern Lightbox Preview Panel */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 bg-black/95 z-[100] backdrop-blur-md flex items-center justify-center p-6"
          >
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-8 right-8 text-xs tracking-widest uppercase text-[#9E9E9E] hover:text-[#F5F4F0] transition-colors"
            >
              Close [ESC]
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-5xl aspect-video overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedIdx].url}
                alt={galleryImages[selectedIdx].title}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 text-left z-10">
                <span className="section-label mb-2 block">{galleryImages[selectedIdx].title}</span>
                <p className="text-[#F5F4F0] text-sm md:text-base font-light tracking-wide max-w-xl">
                  {galleryImages[selectedIdx].desc}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
