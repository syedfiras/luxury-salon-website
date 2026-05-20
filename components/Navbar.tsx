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
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-display font-bold cursor-pointer relative group"
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

      {/* Sticky Bottom Booking Bar (Mobile) */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: scrolled ? 0 : 100 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-luxury-dark/95 backdrop-blur-xl border-t border-white/10 px-4 py-3"
      >
        <div className="flex gap-3">
          <button
            onClick={() => scrollToSection('booking')}
            className="flex-1 button-primary text-sm py-3 text-center"
          >
            Book Appointment
          </button>
          <button
            onClick={() => window.open('https://wa.me/12125557890', '_blank')}
            className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shrink-0"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </button>
        </div>
      </motion.div>
    </>
  )
}

export default Navbar
