'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-luxury-dark border-t border-white/5 pt-16 pb-8 px-6 relative overflow-hidden">
      {/* Decorative Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] gold-gradient opacity-30" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3
              onClick={() => scrollToSection('home')}
              className="text-2xl font-display mb-4 cursor-pointer"
            >
              <span className="text-gold">LUXE</span>
              <span className="text-white"> STUDIO</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Where beauty meets artistry. Experience the pinnacle of luxury salon services in the heart of New York.
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'IG', href: '#', label: 'Instagram' },
                { name: 'FB', href: '#', label: 'Facebook' },
                { name: 'PT', href: '#', label: 'Pinterest' },
                { name: 'YT', href: '#', label: 'YouTube' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-gold hover:border-gold transition-all duration-300 text-xs font-semibold"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-gold font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Services', 'Experts', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-500 hover:text-gold transition-colors text-sm cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-gold font-semibold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3">
              {['Hair Styling', 'Hair Coloring', 'Facial Treatments', 'Makeup Artistry', 'Spa & Wellness'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-500 hover:text-gold transition-colors text-sm cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-gold font-semibold mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">
              Subscribe for exclusive offers, beauty tips, and VIP invitations.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-luxury-black border border-white/10 rounded-l-lg focus:border-gold focus:outline-none text-sm text-white placeholder-gray-500 transition-colors"
              />
              <button className="gold-gradient text-luxury-black px-5 py-3 rounded-r-lg font-semibold text-sm hover:opacity-90 transition-opacity shrink-0">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} LUXE Studio. All rights reserved. Experience the art of luxury beauty.
          </p>
          <div className="flex gap-6 text-xs text-gray-600">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
