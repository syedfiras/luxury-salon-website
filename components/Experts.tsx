'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Image from 'next/image'

const experts = [
  {
    name: 'Isabella Rossi',
    role: 'Creative Director & Master Stylist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80',
    exp: '15 years',
    specialty: 'Shape and proportion',
    tags: ['Editorial', 'Cutting', 'Texture'],
  },
  {
    name: 'Michael Chen',
    role: 'Senior Colorist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',
    exp: '12 years',
    specialty: 'Dimensional color',
    tags: ['Balayage', 'Gloss', 'Correction'],
  },
  {
    name: 'Sophia Laurent',
    role: 'Lead Makeup Artist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80',
    exp: '10 years',
    specialty: 'Occasion beauty',
    tags: ['Bridal', 'Editorial', 'Skin Finish'],
  },
  {
    name: 'David Kim',
    role: 'Spa Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80',
    exp: '8 years',
    specialty: 'Restorative treatments',
    tags: ['Massage', 'Facial', 'Body Care'],
  },
]

const Experts = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experts" className="section-padding bg-gradient-luxury relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/3 rounded-full blur-[60px]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="section-tag">The Studio Team</span>
          <h2 className="section-title">People You Can Trust</h2>
          <p className="section-copy">
            Senior artists and therapists who bring technical discipline, calm presence, and honest guidance to every appointment.
          </p>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {experts.map((expert, index) => (
            <motion.div
              key={expert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              {/* Card Border Glow on Hover */}
              <div className="absolute -inset-[1px] gold-gradient rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

              <div className="relative glassmorphism rounded-xl overflow-hidden bg-luxury-dark/80 backdrop-blur-sm">
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover premium-media"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/20 to-transparent" />

                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 bg-gold/90 text-luxury-black text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                    {expert.exp}
                  </div>

                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-display text-gold mb-1">{expert.name}</h3>
                  <p className="text-sm text-gold-light mb-3">{expert.role}</p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {expert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full border border-gold/30 text-gold/80 bg-gold/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Specialty Highlight */}
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <svg className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{expert.specialty}</span>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="h-[2px] gold-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experts
