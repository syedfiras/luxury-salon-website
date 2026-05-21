'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { getScrollBehavior } from '@/lib/scroll'

const seededPercent = (index: number, salt: number) => {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453
  return `${((value - Math.floor(value)) * 100).toFixed(4)}%`
}

const heroParticles = Array.from({ length: 20 }, (_, i) => ({
  left: seededPercent(i, 1),
  top: seededPercent(i, 2),
  duration: 3 + Number.parseFloat(seededPercent(i, 3)) / 25,
  delay: Number.parseFloat(seededPercent(i, 4)) / 20,
}))

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)
  const [showParticles, setShowParticles] = useState(false)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.04])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px) and (pointer: fine)')
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const canUseAmbientMotion = mediaQuery.matches && !reducedMotionQuery.matches

    if (!canUseAmbientMotion) {
      return
    }

    const revealParticles = () => setShowParticles(true)

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(revealParticles, { timeout: 1200 })
      return () => window.cancelIdleCallback(idleId)
    }

    const timer = globalThis.setTimeout(revealParticles, 700)
    return () => globalThis.clearTimeout(timer)
  }, [])

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
      {/* Parallax Background */}
      <motion.div
        style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(212,175,55,0.16),transparent_34%),linear-gradient(135deg,#15110a_0%,#0A0A0A_46%,#111111_100%)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(245,230,184,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(245,230,184,0.1)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute left-1/2 top-[18%] h-48 w-48 -translate-x-1/2 rounded-full border border-gold/20 sm:h-72 sm:w-72" />
        <div className="absolute left-1/2 top-[18%] h-28 w-28 -translate-x-1/2 rounded-full border border-gold/10 sm:h-44 sm:w-44" />
      </motion.div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-[1]" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent z-[1]" />

      {/* Ambient Light Effects */}
      <div className="absolute top-1/4 left-1/2 z-[1] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[56px] sm:h-[560px] sm:w-[560px] sm:blur-[84px]" />

      {/* Floating Particles */}
      <div className="pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden motion-safe:sm:block">
        {showParticles && heroParticles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold/30 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

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

      {/* Scroll Indicator */}
      <motion.button
        type="button"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="hero-scroll absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        onClick={() => scrollToSection('about')}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-gold/60 text-xs tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-[2px] h-12 gold-gradient rounded-full relative overflow-hidden">
            <motion.div
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-white"
            />
          </div>
        </motion.div>
      </motion.button>
    </section>
  )
}

export default Hero
