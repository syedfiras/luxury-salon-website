// components/Pricing.tsx
'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const pricingPlans = [
  {
    name: 'Signature',
    price: '$89',
    features: ['Consultation', 'Hair Styling', 'Blowout', 'Premium Products'],
    popular: false
  },
  {
    name: 'Executive',
    price: '$189',
    features: ['Consultation', 'Hair Styling + Color', 'Deep Conditioning', 'Premium Products', 'Champagne Service'],
    popular: true
  },
  {
    name: 'Royal',
    price: '$389',
    features: ['Full Service Package', 'Hair + Makeup + Nails', 'Spa Treatment', 'Premium Products', 'Private Suite', 'Complimentary Gifts'],
    popular: false
  },
]

const Pricing = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-24 px-6 bg-gradient-luxury">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Investment in Beauty</span>
          <h2 className="text-4xl md:text-5xl font-display mt-4 mb-6">Luxury Pricing</h2>
          <div className="w-20 h-0.5 gold-gradient mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`glass-card text-center relative ${
                plan.popular ? 'border-gold border-2' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold text-luxury-black px-4 py-1 rounded-full text-xs font-bold">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-display mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold text-gold mb-6">
                {plan.price}
                <span className="text-sm text-gray-400">/service</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-gray-300 text-sm">
                    ✓ {feature}
                  </li>
                ))}
              </ul>
              <button className="button-secondary w-full">Select Plan</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing