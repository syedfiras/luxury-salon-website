'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ['home', 'about', 'services', 'experts', 'gallery', 'contact']
      const scrollPos = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }
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
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-luxury-black/80 backdrop-blur-xl py-3 shadow-xl shadow-black/20' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl sm:text-2xl font-display font-bold cursor-pointer relative group"
          >
            <span className="text-gold">LUXE</span>
            <span className="text-white"> STUDIO</span>
            <div className="absolute -bottom-1 left-0 w-0 h-[2px] gold-gradient group-hover:w-full transition-all duration-300" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`relative text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer py-1 ${
                  activeSection === link.id
                    ? 'text-gold'
                    : 'text-white/70 hover:text-gold'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] gold-gradient"
                  />
                )}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('booking')}
              className="button-primary text-sm px-6 py-2.5"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none relative w-8 h-8 flex items-center justify-center"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[2px] bg-white transition-all duration-300"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-[2px] bg-white transition-all duration-300"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[2px] bg-white transition-all duration-300"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden bg-luxury-black/95 backdrop-blur-xl border-t border-white/5"
            >
              <div className="flex flex-col space-y-1 p-6">
                {navLinks.map((link, idx) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => scrollToSection(link.id)}
                    className={`text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                      activeSection === link.id
                        ? 'text-gold bg-gold/5 border-l-2 border-gold'
                        : 'text-white/70 hover:text-gold hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => scrollToSection('booking')}
                  className="button-primary text-center mt-4"
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

export default Navbar
