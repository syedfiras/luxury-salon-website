'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading of assets (3D, images, etc.)
    // You can replace this with actual loading checks
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Adjust delay as needed

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-luxury-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Loader content */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Gold spinner */}
            <div className="relative w-20 h-20 mx-auto mb-8">
              <div className="absolute inset-0 border-4 border-gold/20 rounded-full" />
              <div className="absolute inset-0 border-4 border-t-gold border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
              <div className="absolute inset-2 border-4 border-gold/10 rounded-full" />
              <div className="absolute inset-2 border-4 border-t-gold-light border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin-slow" />
            </div>

            {/* Text */}
            <h2 className="text-2xl md:text-3xl font-display text-gold tracking-wider">
              LUXE STUDIO
            </h2>
            <div className="w-12 h-0.5 gold-gradient mx-auto my-4" />
            <p className="text-gray-400 text-sm tracking-[0.2em] uppercase">
              Loading experience...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen