'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import HeroScene from './HeroScene'

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-text',
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: 'power3.out' }
      )
      gsap.fromTo('.hero-cta',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 0.8, stagger: 0.1 }
      )
    }, heroRef)

    return () => ctx.revert()
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <HeroScene />

      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-body">
            Welcome to Excellence
          </span>
        </motion.div>

        <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-[1.1]">
          <span className="block">Redefine Beauty.</span>
          <span className="text-gradient block">Experience Luxury.</span>
        </h1>

        <p className="hero-text text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body">
          Where artistry meets elegance. Experience world-class beauty treatments
          in an atmosphere of pure sophistication.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={() => scrollToSection('booking')}
            className="button-primary"
          >
            Book Appointment
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="button-secondary group"
          >
            Explore Services
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero