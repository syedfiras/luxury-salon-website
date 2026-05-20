'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import HeroScene from './HeroScene'

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
  const textRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      tl.fromTo('.hero-subtitle',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1 }
      )
      .fromTo('.hero-title-line',
        { y: 200, rotate: 5 },
        { y: 0, rotate: 0, duration: 1.2, stagger: 0.15 },
        '-=0.5'
      )
      .fromTo('.hero-desc',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      )
      .fromTo('.hero-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        '-=0.4'
      )
      .fromTo('.hero-scroll',
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        '-=0.2'
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
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
        <HeroScene />
      </motion.div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-[1]" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent z-[1]" />

      {/* Ambient Light Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[800px] sm:h-[800px] bg-gold/5 rounded-full blur-[80px] sm:blur-[120px] z-[1]" />
      <div className="absolute bottom-0 right-0 w-[280px] h-[280px] sm:w-[600px] sm:h-[600px] bg-gold/3 rounded-full blur-[70px] sm:blur-[100px] z-[1]" />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {heroParticles.map((particle, i) => (
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
        style={{ x: mousePos.x, y: mousePos.y }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <motion.div className="mb-6">
          <span className="hero-subtitle inline-block text-gold text-xs sm:text-sm tracking-[0.24em] sm:tracking-[0.4em] uppercase font-body">
            Welcome to Excellence
          </span>
        </motion.div>

        <div ref={textRef} className="overflow-hidden mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.08]">
            <div className="hero-title-line overflow-hidden">
              <span className="inline-block text-white">Redefine Beauty.</span>
            </div>
            <div className="hero-title-line overflow-hidden">
              <span className="inline-block gold-gradient-text">Experience Luxury.</span>
            </div>
          </h1>
        </div>

        <p className="hero-desc text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 font-body leading-relaxed">
          Where artistry meets elegance. Experience world-class beauty treatments
          in an atmosphere of pure sophistication.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <button
            onClick={() => scrollToSection('booking')}
            className="button-primary group flex items-center justify-center gap-2"
          >
            <span>Book Appointment</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="button-secondary group flex items-center justify-center gap-2"
          >
            <span>Explore Services</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="hero-scroll absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
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
      </motion.div>
    </section>
  )
}

export default Hero
