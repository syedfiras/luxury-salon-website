'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Image from 'next/image'

const experts = [
  {
    name: 'Isabella Rossi',
    role: 'Creative Director & Master Stylist',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=700&q=80',
    exp: '15 years',
    specialty: 'Shape and proportion',
    note: 'Known for soft structure, quiet corrections, and cuts that keep their shape.',
    tags: ['Editorial', 'Cutting'],
  },
  {
    name: 'Michael Chen',
    role: 'Senior Colorist',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80',
    exp: '12 years',
    specialty: 'Dimensional color',
    note: 'Builds lived-in tone with restraint, gloss, and careful maintenance planning.',
    tags: ['Balayage', 'Gloss'],
  },
  {
    name: 'Sophia Laurent',
    role: 'Lead Makeup Artist',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=700&q=80',
    exp: '10 years',
    specialty: 'Occasion beauty',
    note: 'Keeps skin visible and composed for ceremonies, portraits, and long days.',
    tags: ['Ceremony', 'Skin Finish'],
  },
  {
    name: 'David Kim',
    role: 'Spa Director',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=80',
    exp: '8 years',
    specialty: 'Restorative treatments',
    note: 'Designs restorative rituals around texture, tension, and nervous-system ease.',
    tags: ['Facial', 'Body Care'],
  },
]

const Experts = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experts" className="section-padding bg-atelier-quiet relative overflow-hidden">
      <div className="ambient-boundary" />
      <div className="ambient-floor" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header max-w-4xl"
        >
          <span className="section-tag">The Studio Team</span>
          <h2 className="section-title">People You Can Trust</h2>
          <p className="section-copy">
            Senior artists and therapists who bring technical discipline, calm presence, and honest guidance to every appointment.
          </p>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="grid gap-7 border-t border-white/[0.06] pt-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 xl:gap-8">
          {experts.map((expert, index) => (
            <motion.div
              key={expert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ y: -4 }}
              className={`group relative ${index % 2 === 1 ? 'lg:mt-6' : ''}`}
            >
              <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-white/[0.07] bg-white/[0.018]">
                <div className="relative aspect-[5/4] overflow-hidden bg-luxury-dark sm:aspect-[4/3] lg:aspect-[5/4]">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover grayscale-[10%] premium-media"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/72 via-luxury-dark/12 to-transparent" />
                  <div className="absolute inset-0 bg-[#120d08]/10 mix-blend-multiply" />

                  <div className="absolute bottom-0 left-0 border-r border-t border-gold/20 bg-black/38 px-3.5 py-2 text-[11px] uppercase tracking-[0.16em] text-gold/85 backdrop-blur-sm">
                    {expert.exp}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="min-h-[76px]">
                    <h3 className="mb-1 font-display text-[1.45rem] leading-tight text-gold">{expert.name}</h3>
                    <p className="text-sm leading-5 text-gold-light/75">{expert.role}</p>
                  </div>
                  <p className="mb-5 min-h-[72px] text-sm leading-6 text-gray-400">{expert.note}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {expert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border-b border-gold/25 pb-1 text-xs uppercase tracking-[0.16em] text-gold/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-3 text-xs text-gray-500">
                    <span className="h-px w-8 bg-gold/30" />
                    <span>{expert.specialty}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experts
