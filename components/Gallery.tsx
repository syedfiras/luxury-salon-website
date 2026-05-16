// components/Gallery.tsx
'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const galleryImages = [
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600',
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600',
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600',
  'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600',
  'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600',
]

const Gallery = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="gallery" className="py-24 px-6 bg-luxury-black">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-display mt-4 mb-6">Our Masterpieces</h2>
          <div className="w-20 h-0.5 gold-gradient mx-auto"></div>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="break-inside-avoid group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={img}
                  alt={`Salon work ${idx + 1}`}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-gold text-sm tracking-wider">View Details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery