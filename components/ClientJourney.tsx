'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    phase: '01',
    title: 'Discovery',
    desc: 'An unhurried conversation listening to your natural hair structure, skin needs, and lifestyle.',
  },
  {
    phase: '02',
    title: 'Concept',
    desc: 'Drafting proportions, custom shades, and architectural care paths tailored to your form.',
  },
  {
    phase: '03',
    title: 'Visualization',
    desc: 'Previewing tones and test designs to ensure complete alignment before any active process.',
  },
  {
    phase: '04',
    title: 'Execution',
    desc: 'Precise master craftsmanship using premium selected formulas under careful, steady hands.',
  },
  {
    phase: '05',
    title: 'Completion',
    desc: 'A final details review with curated guidance to maintain balance and growth over time.',
  },
]

export default function ClientJourney() {
  const containerRef = useRef<HTMLElement>(null)
  const isContainerInView = useInView(containerRef, { once: true, amount: 0.15 })

  return (
    <section
      ref={containerRef}
      id="journey"
      className="relative bg-[#0B0B0B] py-28 md:py-40 px-6 lg:px-16 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 md:mb-28">
          <div className="flex items-center gap-3 mb-6">
            <span className="section-label">The Journey</span>
            <span className="accent-line" />
          </div>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-[#F5F4F0] text-3xl md:text-6xl font-light leading-none"
          >
            Form & Process.
          </h2>
        </div>

        {/* Timeline Horizontal Layout */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pt-8">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col group"
              >
                {/* Node indicator */}
                <div className="absolute -top-[37px] left-0 w-[8px] h-[8px] rounded-full bg-[#B8925C] border border-[#0B0B0B] scale-0 group-hover:scale-100 transition-all duration-300 hidden lg:block" />

                <div className="flex items-baseline gap-4 mb-4">
                  <span
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="text-[#B8925C] text-lg font-light"
                  >
                    {step.phase}
                  </span>
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl md:text-2xl text-[#F5F4F0] font-light"
                  >
                    {step.title}
                  </h3>
                </div>

                <p className="text-[#9E9E9E] font-light text-xs md:text-sm leading-relaxed max-w-[240px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
