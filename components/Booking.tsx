'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())
  const [selectedService, setSelectedService] = useState('')
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [bookingData, setBookingData] = useState<any>(null)
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    message: '' 
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Store booking data for modal
    setBookingData({
      name: formData.name,
      service: selectedService || 'Consultation',
      date: selectedDate ? selectedDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) : 'To be confirmed',
      email: formData.email,
      phone: formData.phone
    })
    
    setShowConfirmation(true)
    
    // Auto-hide modal after 4 seconds
    setTimeout(() => {
      setShowConfirmation(false)
      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' })
      setSelectedService('')
      setSelectedDate(new Date())
    }, 4000)
  }

  return (
    <>
      <section id="booking" className="py-24 px-6 bg-gradient-luxury">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Reserve Your Experience</span>
            <h2 className="text-4xl md:text-5xl font-display mt-4 mb-6">Book Appointment</h2>
            <div className="w-20 h-0.5 gold-gradient mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-gold mb-2 text-sm">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-luxury-black/50 border border-white/10 rounded-lg focus:border-gold focus:outline-none transition-colors text-white"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gold mb-2 text-sm">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-luxury-black/50 border border-white/10 rounded-lg focus:border-gold focus:outline-none transition-colors text-white"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gold mb-2 text-sm">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 bg-luxury-black/50 border border-white/10 rounded-lg focus:border-gold focus:outline-none transition-colors text-white"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-gold mb-2 text-sm">Select Service *</label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-luxury-black/50 border border-white/10 rounded-lg focus:border-gold focus:outline-none transition-colors text-white"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                  >
                    <option value="">Choose a service</option>
                    <option>Hair Styling - $120</option>
                    <option>Hair Coloring - $200</option>
                    <option>Facial Treatments - $150</option>
                    <option>Makeup Artistry - $180</option>
                    <option>Nail Care - $80</option>
                    <option>Spa & Wellness - $160</option>
                    <option>Grooming Services - $90</option>
                    <option>Bridal Package - $500</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gold mb-2 text-sm">Preferred Date *</label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date: Date | null) => setSelectedDate(date)}
                    className="w-full px-4 py-3 bg-luxury-black/50 border border-white/10 rounded-lg focus:border-gold focus:outline-none transition-colors text-white"
                    minDate={new Date()}
                    placeholderText="Select a date"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gold mb-2 text-sm">Special Requests</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 bg-luxury-black/50 border border-white/10 rounded-lg focus:border-gold focus:outline-none transition-colors text-white"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Any special requests or notes..."
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full button-primary py-4 text-lg"
                >
                  Confirm Appointment
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Beautiful Confirmation Modal */}
      <AnimatePresence>
        {showConfirmation && bookingData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative glass-card max-w-md w-full p-8 text-center z-10"
            >
              {/* Animated Success Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 mx-auto mb-6 rounded-full gold-gradient flex items-center justify-center"
              >
                <svg className="w-10 h-10 text-luxury-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>

              <h3 className="text-2xl font-display text-gold mb-2">Booking Confirmed! ✨</h3>
              <p className="text-gray-300 mb-6">Your appointment has been successfully scheduled.</p>

              <div className="text-left space-y-3 mb-6 p-4 bg-white/5 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gold text-sm">Guest:</span>
                  <p className="text-white font-semibold">{bookingData.name}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gold text-sm">Service:</span>
                  <p className="text-white font-semibold">{bookingData.service}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gold text-sm">Date:</span>
                  <p className="text-white font-semibold">{bookingData.date}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gold text-sm">Confirmation sent to:</span>
                  <p className="text-white font-semibold text-sm">{bookingData.email}</p>
                </div>
              </div>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 3 }}
                className="h-0.5 gold-gradient rounded-full"
              />
              <p className="text-gray-400 text-xs mt-4">Redirecting to home...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Booking