'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Experts', id: 'experts' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'glassmorphism py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('home')} 
          className="text-2xl font-display font-bold cursor-pointer"
        >
          <span className="text-gold">LUXE</span>
          <span className="text-white"> STUDIO</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-white hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wider cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('booking')}
            className="text-gold border border-gold px-4 py-2 rounded-full hover:bg-gold hover:text-black transition-all text-sm uppercase tracking-wider"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden glassmorphism"
      >
        <div className="flex flex-col space-y-4 p-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-white hover:text-gold transition-colors duration-300 py-2 text-left"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('booking')}
            className="text-gold border border-gold px-4 py-2 rounded-full text-center hover:bg-gold hover:text-black transition-all"
          >
            Book Now
          </button>
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar