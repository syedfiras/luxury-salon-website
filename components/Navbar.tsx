'use client'

import { useState, useEffect, useId, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuId = useId()
  const headerRef = useRef<HTMLElement>(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    // Hide/show on scroll logic
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        // Scrolling down
        gsap.to(header, { y: -100, duration: 0.4, ease: 'power2.in' })
      } else {
        // Scrolling up
        gsap.to(header, { y: 0, duration: 0.5, ease: 'power3.out' })
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Exhibits', id: 'gallery' },
    { name: 'Atelier', id: 'experts' },
    { name: 'Contact', id: 'contact' },
  ]

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 py-6 px-6 lg:px-12 bg-[#0B0B0B]/20 backdrop-blur-md border-b border-white/[0.04] transition-all duration-300"
        role="navigation"
        aria-label="Primary navigation"
      >
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-baseline gap-1 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B8925C]"
            aria-label="LUXE Studio home"
            data-cursor
          >
            <span
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-[#B8925C] text-2xl tracking-[0.16em] font-medium uppercase"
            >
              LUXE
            </span>
            <span
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="text-[#F5F4F0] text-[9px] tracking-[0.38em] uppercase opacity-75 ml-1.5"
            >
              STUDIO
            </span>
          </button>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-9" aria-label="Desktop menu">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="relative text-[10px] tracking-[0.25em] uppercase text-[#9E9E9E] hover:text-[#F5F4F0] hover:tracking-[0.28em] transition-all duration-500 py-1"
                data-cursor
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#B8925C] transition-all duration-300 hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[10px] tracking-[0.25em] uppercase border border-[#B8925C]/40 text-[#B8925C] px-5 py-2.5 hover:bg-[#B8925C]/10 transition-all duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B8925C]"
              data-cursor
            >
              Reserve
            </button>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#F5F4F0] p-2 flex flex-col gap-1.5 focus-visible:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls={menuId}
            data-cursor
          >
            <span className={`block w-6 h-[1px] bg-[#F5F4F0] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <span className={`block w-6 h-[1px] bg-[#F5F4F0] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[1px] bg-[#F5F4F0] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
          </button>
        </div>

        {/* Mobile Flyout */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id={menuId}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="md:hidden absolute top-full inset-x-0 bg-[#0B0B0B] border-b border-white/5 py-8 px-6"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-[11px] tracking-[0.25em] uppercase text-[#9E9E9E] hover:text-[#B8925C] transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-center text-[11px] tracking-[0.25em] uppercase text-[#B8925C] border border-[#B8925C]/30 py-3 w-full"
                >
                  Reserve a Visit
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

export default Navbar
