'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { getScrollBehavior } from '@/lib/scroll'

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.04])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: getScrollBehavior() })
    }
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.58),rgba(0,0,0,0.08)_42%,rgba(0,0,0,0.52)),linear-gradient(180deg,#1b150f_0%,#0d0b09_44%,#080807_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,220,178,0.075)_0%,rgba(246,220,178,0.025)_22%,rgba(0,0,0,0)_46%,rgba(0,0,0,0.5)_100%)]" />
      </motion.div>

      <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0.48)_0%,rgba(0,0,0,0.1)_34%,rgba(0,0,0,0.72)_100%)]" />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(0,0,0,0.36),transparent_28%,transparent_72%,rgba(0,0,0,0.42))]" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-5 sm:mb-6"
        >
          <span className="inline-block text-gold text-xs sm:text-sm tracking-[0.22em] sm:tracking-[0.34em] uppercase font-body">
            Salon and Spa Atelier
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.08]"
        >
          <span className="block text-white">Beauty, considered</span>
          <span className="block gold-gradient-text">with quiet precision.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 font-body leading-relaxed"
        >
          Hair, skin, grooming, and occasion beauty shaped around the person in
          the chair, with time for conversation, craft, and a measured sense of ease.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.48 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center"
        >
          <button
            onClick={() => scrollToSection('booking')}
            className="button-primary group flex min-h-12 items-center justify-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            <span>Reserve a Visit</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="button-secondary group flex min-h-12 items-center justify-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            <span>View Services</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
