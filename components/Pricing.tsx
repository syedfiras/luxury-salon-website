'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { getScrollBehavior } from '@/lib/scroll'

const pricingPlans = [
  {
    name: 'Essential',
    price: '$89',
    features: ['Short consultation', 'Cut or styling service', 'Finish and care notes', 'Selected professional products'],
    popular: false
  },
  {
    name: 'Signature',
    price: '$189',
    features: ['Extended consultation', 'Cut with color or treatment', 'Conditioning support', 'At-home care guidance', 'Refreshment service'],
    popular: true
  },
  {
    name: 'Atelier',
    price: '$389',
    features: ['Multi-service appointment', 'Hair, makeup, nails, or body care', 'Private room on request', 'Timing plan', 'Take-home care edit'],
    popular: false
  },
]

const Pricing = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const scrollToBooking = () => {
    const section = document.getElementById('booking')
    if (section) section.scrollIntoView({ behavior: getScrollBehavior() })
  }

  return (
    <section className="section-padding bg-atelier-charcoal relative overflow-hidden">
      <div className="ambient-boundary" />
      <div className="ambient-floor" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header section-header-centered"
        >
          <span className="section-tag">Starting Points</span>
          <h2 className="section-title">Service Guides</h2>
          <p className="section-copy">
            Transparent starting points for common appointment types. Final timing and pricing are confirmed after consultation.
          </p>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ y: -4 }}
              className={`glass-card text-center relative flex flex-col ${
                plan.popular ? 'border-gold border-2 shadow-xl shadow-gold/10' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="gold-gradient text-luxury-black px-6 py-1 rounded-full text-xs font-bold tracking-wider shadow-lg">
                    MOST REQUESTED
                  </div>
                </div>
              )}

              {/* Card Header */}
              <div className="mb-6 pt-4">
                <h3 className="text-2xl font-display mb-4">{plan.name}</h3>
                <div className="text-4xl sm:text-5xl font-bold text-gold mb-2">
                  {plan.price}
                  <span className="text-sm text-gray-400 font-body ml-1">starting</span>
                </div>
              </div>

              {/* Features */}
              <div className="flex-1 mb-8">
                <ul className="space-y-3 px-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button
                onClick={scrollToBooking}
                className={`w-full min-h-12 py-3.5 rounded-full font-semibold transition-all duration-300 ease-out ${
                  plan.popular
                    ? 'gold-gradient text-luxury-black hover:shadow-lg hover:shadow-gold/20'
                    : 'border-2 border-gold text-gold hover:bg-gold/10'
                }`}
              >
                Reserve {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
