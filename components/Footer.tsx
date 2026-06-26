'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0B0B0B] border-t border-white/5 py-20 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col justify-between h-full">
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          {/* Column 1: Info */}
          <div className="md:col-span-2 space-y-4">
            <h3
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-[#B8925C] text-3xl tracking-[0.16em] uppercase cursor-pointer w-fit"
              data-cursor
            >
              LUXE STUDIO
            </h3>
            <p className="text-[#9E9E9E] font-light text-xs max-w-sm leading-relaxed">
              A private New York salon and spa atelier. Designing quiet spaces where architectural precision and sensory calm become one.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <span className="text-[10px] tracking-widest text-[#B8925C] uppercase block mb-1">Index</span>
            <ul className="space-y-2 text-xs font-light">
              {['About', 'Services', 'Gallery', 'Experts'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-[#9E9E9E] hover:text-[#F5F4F0] transition-colors"
                    data-cursor
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div className="space-y-4">
            <span className="text-[10px] tracking-widest text-[#B8925C] uppercase block mb-1">Connect</span>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9E9E9E] hover:text-[#F5F4F0] transition-colors"
                  data-cursor
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9E9E9E] hover:text-[#F5F4F0] transition-colors"
                  data-cursor
                >
                  Pinterest
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9E9E9E] hover:text-[#F5F4F0] transition-colors"
                  data-cursor
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom copyright details */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-widest text-[#9E9E9E] uppercase font-light">
          <p>© {new Date().getFullYear()} LUXE STUDIO. ALL RIGHTS RESERVED.</p>
          <p>NEW YORK CITY</p>
        </div>
      </div>
    </footer>
  )
}
