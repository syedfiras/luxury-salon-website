'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getScrollBehavior } from '@/lib/scroll'

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/12125557890?text=Hi%20LUXE%20Studio!%20I%27d%20like%20to%20request%20an%20appointment.',
      '_blank',
      'noopener,noreferrer'
    )
  }

  const scrollToBooking = () => {
    const section = document.getElementById('booking')
    if (section) section.scrollIntoView({ behavior: getScrollBehavior() })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-5 left-5 sm:bottom-8 sm:left-8 z-50 flex flex-col gap-3">
          {/* WhatsApp Button */}
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleWhatsApp}
            aria-label="Chat with LUXE Studio on WhatsApp"
            className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-[1.04] active:scale-95 transition-transform duration-300 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>

          </motion.button>

          {/* Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="absolute left-16 top-1/2 -translate-y-1/2 bg-luxury-dark/95 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-lg border border-white/10 shadow-lg whitespace-nowrap hidden sm:block"
              >
                Chat with us on WhatsApp
                <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-luxury-dark border-l border-t border-white/10 rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick Book Button (Mobile-friendly secondary CTA) */}
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
            onClick={scrollToBooking}
            aria-label="Request an appointment"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full gold-gradient flex items-center justify-center shadow-lg hover:scale-[1.04] active:scale-95 transition-transform duration-300 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-luxury-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  )
}

export default FloatingWhatsApp
