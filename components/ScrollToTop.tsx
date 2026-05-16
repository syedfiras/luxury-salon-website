'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (scrolled / scrollHeight) * 100
      
      setScrollProgress(progress)
      
      if (scrolled > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Calculate circle circumference for progress ring
  const radius = 28
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
          className="fixed bottom-8 right-8 z-50 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* SVG Progress Ring */}
          <div className="relative w-16 h-16">
            <svg className="w-full h-full transform -rotate-90">
              {/* Background circle */}
              <circle
                cx="32"
                cy="32"
                r={radius}
                stroke="rgba(212, 175, 55, 0.2)"
                strokeWidth="3"
                fill="none"
              />
              {/* Progress circle */}
              <circle
                cx="32"
                cy="32"
                r={radius}
                stroke="#D4AF37"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-300"
              />
            </svg>
            
            {/* Inner button */}
            <div className="absolute inset-1 rounded-full gold-gradient flex items-center justify-center shadow-lg">
              <svg 
                className="w-5 h-5 text-luxury-black" 
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
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            <div className="bg-luxury-black/90 backdrop-blur-sm text-gold text-xs py-1.5 px-3 rounded-lg border border-gold/30 font-medium">
              Back to Top
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop