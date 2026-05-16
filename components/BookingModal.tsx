'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  bookingDetails: {
    name: string
    service: string
    date: string
    email: string
  }
}

const BookingModal = ({ isOpen, onClose, bookingDetails }: BookingModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative glass-card max-w-md w-full p-8 text-center z-10"
          >
            {/* Success Icon */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-full gold-gradient flex items-center justify-center">
              <svg className="w-10 h-10 text-luxury-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h3 className="text-2xl font-display text-gold mb-2">Booking Confirmed!</h3>
            <p className="text-gray-300 mb-6">Your appointment has been successfully scheduled.</p>

            <div className="text-left space-y-3 mb-6 p-4 bg-white/5 rounded-lg">
              <div>
                <span className="text-gold text-sm">Guest:</span>
                <p className="text-white font-semibold">{bookingDetails.name}</p>
              </div>
              <div>
                <span className="text-gold text-sm">Service:</span>
                <p className="text-white font-semibold">{bookingDetails.service}</p>
              </div>
              <div>
                <span className="text-gold text-sm">Date:</span>
                <p className="text-white font-semibold">{bookingDetails.date}</p>
              </div>
              <div>
                <span className="text-gold text-sm">Confirmation sent to:</span>
                <p className="text-white font-semibold">{bookingDetails.email}</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="button-primary w-full"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BookingModal