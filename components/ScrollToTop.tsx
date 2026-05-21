'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getScrollBehavior } from '@/lib/scroll'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0

      setScrollProgress(progress)

      if (scrolled > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    toggleVisibility()
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: getScrollBehavior()
    })
  }

  const radius = 22
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold rounded-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-12 h-12 sm:w-14 sm:h-14">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="22"
                stroke="rgba(212, 175, 55, 0.15)"
                strokeWidth="3"
                fill="none"
              />
              <circle
                cx="50%"
                cy="50%"
                r="22"
                stroke="#D4AF37"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-300"
              />
            </svg>

            <div className="absolute inset-1 rounded-full bg-luxury-dark/92 backdrop-blur-sm border border-gold/20 flex items-center justify-center shadow-lg transition-colors duration-300 group-hover:border-gold/45">
              <svg
                className="w-5 h-5 text-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </div>
          </div>

          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap translate-x-2 group-hover:translate-x-0 hidden sm:block">
            <div className="bg-luxury-dark/92 backdrop-blur-sm text-gold text-xs py-1.5 px-3 rounded-lg border border-gold/20 shadow-lg">
              Back to Top
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
