'use client'

import { motion } from 'framer-motion'

const ContactLocation = () => {
  const handleBooking = () => {
    const section = document.getElementById('booking')
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 bg-luxury-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-gold/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-gold/3 rounded-full blur-[60px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-tag">Visit Us</span>
          <h2 className="section-title">Our Sanctuary</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card md:p-10"
          >
            <h3 className="text-2xl font-display mb-6 text-gold">Location & Hours</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-luxury-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Address</p>
                  <p className="text-gray-400 text-sm mt-1">452 Fifth Avenue, New York, NY 10018</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-luxury-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <p className="text-gray-400 text-sm mt-1">+1 (212) 555-7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-luxury-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-400 text-sm mt-1">hello@luxestudio.com</p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h4 className="font-semibold mb-4 text-gold">Opening Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 text-gray-300">
                    <span>Monday - Friday</span>
                    <span className="text-gold">9am - 8pm</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 text-gray-300">
                    <span>Saturday</span>
                    <span className="text-gold">10am - 6pm</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 text-gray-300">
                    <span>Sunday</span>
                    <span className="text-gold">11am - 5pm</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleBooking}
              className="button-primary w-full mt-8"
            >
              Book Your Visit
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden h-80 md:h-96 relative group"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.966215614455!2d-74.00448488459497!3d40.75513057932724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6d3c2b9%3A0x3f0b5b8b5b8b5b8b!2sFifth%20Avenue!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />

            {/* Map Overlay */}
            <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactLocation
