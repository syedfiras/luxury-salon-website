// components/ContactLocation.tsx
'use client'

import { motion } from 'framer-motion'

const ContactLocation = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-luxury-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Visit Us</span>
          <h2 className="text-4xl md:text-5xl font-display mt-4 mb-6">Our Sanctuary</h2>
          <div className="w-20 h-0.5 gold-gradient mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            <h3 className="text-2xl font-display mb-6 text-gold">Location & Hours</h3>
            <div className="space-y-6">
              <div>
                <p className="text-gray-300 mb-2">📍 452 Fifth Avenue, New York, NY 10018</p>
                <p className="text-gray-300">📞 +1 (212) 555-7890</p>
                <p className="text-gray-300">✉️ hello@luxestudio.com</p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <h4 className="font-semibold mb-3">Opening Hours</h4>
                <p className="text-gray-400">Monday - Friday: 9am - 8pm</p>
                <p className="text-gray-400">Saturday: 10am - 6pm</p>
                <p className="text-gray-400">Sunday: 11am - 5pm</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.966215614455!2d-74.00448488459497!3d40.75513057932724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6d3c2b9%3A0x3f0b5b8b5b8b5b8b!2sFifth%20Avenue!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactLocation