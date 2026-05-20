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

  const scrollToBooking = () => {
    const section = document.getElementById('booking')
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-24 px-6 bg-gradient-luxury relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/3 rounded-full blur-[150px]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="section-tag">Investment in Beauty</span>
          <h2 className="section-title">Luxury Pricing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Choose your experience. Each package is designed to deliver exceptional results.
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
              whileHover={{ y: -10 }}
              className={`glass-card text-center relative flex flex-col ${
                plan.popular ? 'border-gold border-2 shadow-xl shadow-gold/10' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="gold-gradient text-luxury-black px-6 py-1 rounded-full text-xs font-bold tracking-wider shadow-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Card Header */}
              <div className="mb-6 pt-4">
                <h3 className="text-2xl font-display mb-4">{plan.name}</h3>
                <div className="text-5xl font-bold text-gold mb-2">
                  {plan.price}
                  <span className="text-sm text-gray-400 font-body ml-1">/service</span>
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
                className={`w-full py-3.5 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'gold-gradient text-luxury-black hover:shadow-lg hover:shadow-gold/30'
                    : 'border-2 border-gold text-gold hover:bg-gold/10'
                }`}
              >
                Select {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
