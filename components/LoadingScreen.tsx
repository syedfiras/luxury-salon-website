'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 15 + 5
        return next >= 100 ? 100 : next
      })
    }, 300)

    const timer = setTimeout(() => {
      clearInterval(interval)
      setIsLoading(false)
    }, 2000)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-luxury-black">
            <div className="absolute inset-0 bg-gradient-to-br from-luxury-black via-luxury-dark to-luxury-black" />
          </div>

          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />

          {/* Loader Content */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Animated Rings */}
            <div className="relative w-24 h-24 mx-auto mb-8">
              <div className="absolute inset-0 border border-gold/10 rounded-full" />
              <motion.div
                className="absolute inset-0 border-2 border-t-gold border-r-transparent border-b-transparent border-l-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-3 border border-gold/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              <div className="absolute inset-6 border border-gold/10 rounded-full" />

              {/* Center Star */}
              <motion.div
                className="absolute inset-8 rounded-full gold-gradient flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg className="w-3 h-3 text-luxury-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </motion.div>
            </div>

            {/* Brand Text */}
            <motion.h2
              className="text-3xl md:text-4xl font-display text-gold tracking-[0.15em]"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              LUXE STUDIO
            </motion.h2>
            <div className="w-16 h-[1px] gold-gradient mx-auto my-4" />
            <p className="text-gray-500 text-xs tracking-[0.3em] uppercase">
              Crafting beauty
            </p>

            {/* Progress Bar */}
            <div className="mt-8 max-w-[200px] mx-auto">
              <div className="h-[1px] bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full gold-gradient rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="text-gray-600 text-xs mt-2 tracking-wider">
                {Math.round(progress)}%
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
