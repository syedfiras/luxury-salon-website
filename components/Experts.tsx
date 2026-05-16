// components/Experts.tsx
'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const experts = [
  {
    name: 'Isabella Rossi',
    role: 'Creative Director & Master Stylist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    exp: '15+ years experience',
    specialty: 'Editorial Styling'
  },
  {
    name: 'Michael Chen',
    role: 'Color Specialist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    exp: '12+ years experience',
    specialty: 'Balayage Expert'
  },
  {
    name: 'Sophia Laurent',
    role: 'Lead Makeup Artist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    exp: '10+ years experience',
    specialty: 'Bridal & Editorial'
  },
  {
    name: 'David Kim',
    role: 'Spa Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    exp: '8+ years experience',
    specialty: 'Holistic Treatments'
  },
]

const Experts = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experts" className="py-24 px-6 bg-gradient-luxury">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Meet Our Team</span>
          <h2 className="text-4xl md:text-5xl font-display mt-4 mb-6">Master Artists</h2>
          <div className="w-20 h-0.5 gold-gradient mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experts.map((expert, index) => (
            <motion.div
              key={expert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card text-center p-0 overflow-hidden group"
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display mb-1 text-gold">{expert.name}</h3>
                <p className="text-sm text-goldLight mb-2">{expert.role}</p>
                <p className="text-gray-400 text-sm">{expert.exp}</p>
                <p className="text-gray-300 text-xs mt-2">{expert.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experts