'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    title: 'Editorial Glamour',
    desc: 'High-fashion styling session',
    span: 'row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
    title: 'Balayage Masterpiece',
    desc: 'Sun-kissed dimensional color',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
    title: 'Bridal Elegance',
    desc: 'Wedding day perfection',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80',
    title: 'Sculpted Waves',
    desc: 'Red carpet ready',
    span: 'row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80',
    title: 'Color Fusion',
    desc: 'Creative color artistry',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
    title: 'Makeup Artistry',
    desc: 'Flawless complexion',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
    title: 'Luxury Nail Art',
    desc: 'Intricate hand-painted design',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    title: 'Spa Serenity',
    desc: 'Ultimate relaxation experience',
    span: '',
  },
]

const Gallery = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [selected, setSelected] = useState<number | null>(null)
  const [loaded, setLoaded] = useState<Set<number>>(new Set())

  const openPreview = (idx: number) => setSelected(idx)
  const closePreview = () => setSelected(null)
  const goNext = () => {
    if (selected !== null && selected < galleryImages.length - 1) {
      setSelected(selected + 1)
    }
  }
  const goPrev = () => {
    if (selected !== null && selected > 0) {
      setSelected(selected - 1)
    }
  }

  return (
    <section id="gallery" className="py-16 md:py-24 px-4 sm:px-6 bg-luxury-black relative">
      {/* Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[600px] sm:h-[600px] bg-gold/3 rounded-full blur-[80px] sm:blur-[100px]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Our Masterpieces</h2>
          <div className="section-divider" />
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: idx * 0.08,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className={`${img.span} ${idx === 4 || idx === 6 || idx === 7 ? 'hidden lg:block' : idx === 5 ? 'hidden sm:block' : ''} group cursor-pointer`}
              onClick={() => openPreview(idx)}
            >
              <div className="relative overflow-hidden rounded-2xl h-full min-h-[240px] sm:min-h-[280px]">
                <motion.img
                  src={img.url}
                  alt={img.title}
                  loading="lazy"
                  className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${loaded.has(idx) ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setLoaded(prev => new Set(prev).add(idx))}
                />

                {/* Loading Placeholder */}
                {!loaded.has(idx) && (
                  <div className="absolute inset-0 bg-luxury-dark animate-pulse" />
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Hover Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                >
                  <h3 className="text-xl font-display text-gold mb-1">{img.title}</h3>
                  <p className="text-sm text-gray-300">{img.desc}</p>
                </motion.div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold/0 group-hover:border-gold/60 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold/0 group-hover:border-gold/60 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Preview */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-3 sm:px-4"
            onClick={closePreview}
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />

            {/* Close Button */}
            <button
              onClick={closePreview}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all group"
            >
              <svg className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-4 sm:top-6 sm:left-6 z-10 text-gold text-sm tracking-wider">
              {selected + 1} / {galleryImages.length}
            </div>

            {/* Navigation Arrows */}
            {selected > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); goPrev() }}
                className="absolute left-3 sm:left-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            {selected < galleryImages.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goNext() }}
                className="absolute right-3 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Image */}
            <motion.div
              key={selected}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selected].url}
                alt={galleryImages[selected].title}
                className="max-w-full max-h-full object-contain rounded-xl sm:rounded-2xl shadow-2xl"
              />

              {/* Caption */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 text-center bg-gradient-to-t from-black/80 to-transparent"
              >
                <h3 className="text-2xl md:text-3xl font-display text-gold mb-1">
                  {galleryImages[selected].title}
                </h3>
                <p className="text-gray-300">{galleryImages[selected].desc}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
