'use client'

import type { FormEvent } from 'react'
import { useEffect, useId, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

type BookingData = {
    name: string
    service: string
    date: string
    email: string
    phone: string
}

const Booking = () => {
    const formId = useId()
    const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())
    const [selectedService, setSelectedService] = useState('')
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [bookingData, setBookingData] = useState<BookingData | null>(null)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    useEffect(() => {
        if (!showConfirmation) {
            return
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setShowConfirmation(false)
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [showConfirmation])

    useEffect(() => {
        return () => {
            if (resetTimerRef.current) {
                clearTimeout(resetTimerRef.current)
            }
        }
    }, [])

    const handleSubmit = (e: FormEvent) => {
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
        if (resetTimerRef.current) {
            clearTimeout(resetTimerRef.current)
        }
        resetTimerRef.current = setTimeout(() => {
            setShowConfirmation(false)
            // Reset form
            setFormData({ name: '', email: '', phone: '', message: '' })
            setSelectedService('')
            setSelectedDate(new Date())
        }, 4000)
    }

    return (
        <>
            <section id="booking" className="section-padding bg-gradient-luxury">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="section-header"
                    >
                        <span className="section-tag">Appointments</span>
                        <h2 className="section-title">Reserve a Visit</h2>
                        <div className="section-divider"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="glass-card md:p-12"
                    >
                        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-7 md:gap-8">
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor={`${formId}-name`} className="block text-gold mb-2 text-sm">Full Name *</label>
                                    <input
                                        id={`${formId}-name`}
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 bg-luxury-black/50 border border-white/10 rounded-lg focus:border-gold focus:outline-none transition-colors text-white"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Alex Morgan"
                                    />
                                </div>
                                <div>
                                    <label htmlFor={`${formId}-email`} className="block text-gold mb-2 text-sm">Email Address *</label>
                                    <input
                                        id={`${formId}-email`}
                                        type="email"
                                        required
                                        className="w-full px-4 py-3 bg-luxury-black/50 border border-white/10 rounded-lg focus:border-gold focus:outline-none transition-colors text-white"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="alex@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor={`${formId}-phone`} className="block text-gold mb-2 text-sm">Phone Number *</label>
                                    <input
                                        id={`${formId}-phone`}
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
                                    <label htmlFor={`${formId}-service`} className="block text-gold mb-2 text-sm">Select Service *</label>
                                    <select
                                        id={`${formId}-service`}
                                        required
                                        className="w-full px-4 py-3 bg-luxury-black/50 border border-white/10 rounded-lg focus:border-gold focus:outline-none transition-colors text-white"
                                        value={selectedService}
                                        onChange={(e) => setSelectedService(e.target.value)}
                                    >
                                        <option value="">Choose a service</option>
                                        <option>Cut & Finish - from $120</option>
                                        <option>Color Work - from $200</option>
                                        <option>Skin Rituals - from $150</option>
                                        <option>Makeup - from $180</option>
                                        <option>Hands & Feet - from $80</option>
                                        <option>Body Care - from $160</option>
                                        <option>Grooming - from $90</option>
                                        <option>Ceremony Edit - from $500</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor={`${formId}-date`} className="block text-gold mb-2 text-sm">Preferred Date *</label>
                                    <DatePicker
                                        id={`${formId}-date`}
                                        wrapperClassName="w-full"
                                        selected={selectedDate}
                                        onChange={(date: Date | null) => setSelectedDate(date)}
                                        className="w-full px-4 py-3 bg-luxury-black/50 border border-white/10 rounded-lg focus:border-gold focus:outline-none transition-colors text-white"
                                        minDate={new Date()}
                                        placeholderText="Select a date"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor={`${formId}-message`} className="block text-gold mb-2 text-sm">Special Requests</label>
                                    <textarea
                                        id={`${formId}-message`}
                                        rows={3}
                                        className="w-full px-4 py-3 bg-luxury-black/50 border border-white/10 rounded-lg focus:border-gold focus:outline-none transition-colors text-white"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Hair history, skin notes, timing, or anything we should know."
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full button-primary py-4 text-base sm:text-lg"
                                >
                                    Request Appointment
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
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={`${formId}-confirmation-title`}
                        aria-describedby={`${formId}-confirmation-copy`}
                        className="fixed inset-0 z-50 flex items-center justify-center px-4"
                    >
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative glass-card max-w-md w-full p-6 sm:p-8 text-center z-10"
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

                            <h3 id={`${formId}-confirmation-title`} className="text-2xl font-display text-gold mb-2">Request Received</h3>
                            <p id={`${formId}-confirmation-copy`} className="text-gray-300 mb-6">Our front desk will confirm timing and service details with you.</p>

                            <div className="text-left space-y-3 mb-6 p-4 bg-white/5 rounded-lg">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                                    <span className="text-gold text-sm">Guest:</span>
                                    <p className="text-white font-semibold">{bookingData.name}</p>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                                    <span className="text-gold text-sm">Service:</span>
                                    <p className="text-white font-semibold">{bookingData.service}</p>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                                    <span className="text-gold text-sm">Date:</span>
                                    <p className="text-white font-semibold">{bookingData.date}</p>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
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
                            <button
                                type="button"
                                onClick={() => setShowConfirmation(false)}
                                className="mt-5 text-sm text-gold hover:text-goldLight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                            >
                                Close
                            </button>
                            <p className="text-gray-400 text-xs mt-4">Closing shortly...</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Booking
