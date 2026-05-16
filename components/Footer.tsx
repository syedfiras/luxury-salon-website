// components/Footer.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-luxury-dark border-t border-white/10 py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-display mb-4">
              <span className="text-gold">LUXE</span>
              <span className="text-white"> STUDIO</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Where beauty meets artistry. Experience the pinnacle of luxury salon services.
            </p>
          </div>
          <div>
            <h4 className="text-gold font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Services', 'Experts', 'Gallery'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-gold transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-gold font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {['Instagram', 'Facebook', 'Pinterest', 'YouTube'].map((social) => (
                <a key={social} href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-gold font-semibold mb-4">Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-luxury-black border border-white/10 rounded-l-lg focus:border-gold focus:outline-none text-sm"
              />
              <button className="bg-gold text-luxury-black px-4 py-2 rounded-r-lg font-semibold text-sm hover:bg-goldLight transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2026 LUXE Studio. All rights reserved. Experience the art of luxury beauty.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer