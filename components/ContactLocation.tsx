'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ContactLocation() {
  const containerRef = useRef<HTMLElement>(null)
  const isContainerInView = useInView(containerRef, { once: true, amount: 0.1 })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative bg-[#0B0B0B] py-28 md:py-40 px-6 lg:px-16 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
        
        {/* Column 1: Studio Info & Contact Coordinates */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="section-label">Visit Us</span>
              <span className="accent-line" />
            </div>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-[#F5F4F0] text-4xl md:text-7xl font-light leading-none mb-10"
            >
              Inquire.
            </h2>
            <p className="text-[#9E9E9E] font-light max-w-sm text-sm leading-relaxed mb-12">
              For reserves, collaborations, or private studio requests, please reach out via form or direct coordinate details.
            </p>
          </div>

          <div className="space-y-8 text-sm font-light">
            {/* Address */}
            <div>
              <span className="text-[10px] tracking-widest text-[#B8925C] uppercase block mb-1">Location</span>
              <p className="text-[#F5F4F0]">452 Fifth Avenue, New York, NY 10018</p>
            </div>
            
            {/* Contact details */}
            <div className="flex gap-16">
              <div>
                <span className="text-[10px] tracking-widest text-[#B8925C] uppercase block mb-1">Phone</span>
                <p className="text-[#F5F4F0]">+1 (212) 555-7890</p>
              </div>
              <div>
                <span className="text-[10px] tracking-widest text-[#B8925C] uppercase block mb-1">Email</span>
                <p className="text-[#F5F4F0]">hello@luxestudio.com</p>
              </div>
            </div>

            {/* Hours */}
            <div>
              <span className="text-[10px] tracking-widest text-[#B8925C] uppercase block mb-2">Hours</span>
              <div className="space-y-1 text-xs text-[#9E9E9E]">
                <div className="flex justify-between w-48"><span>Mon - Fri</span><span>9am - 8pm</span></div>
                <div className="flex justify-between w-48"><span>Saturday</span><span>10am - 6pm</span></div>
                <div className="flex justify-between w-48"><span>Sunday</span><span>11am - 5pm</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Minimal Form + Monochrome Map */}
        <div className="lg:col-span-7 space-y-12">
          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-[#B8925C]/30 p-8 bg-[#151515] text-center"
            >
              <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-[#B8925C] text-2xl font-light mb-4">
                Inquiry Received.
              </h3>
              <p className="text-xs text-[#9E9E9E] font-light leading-relaxed">
                Thank you for your request. Our atelier hosting staff will reach out within 24 business hours to confirm your reservation parameters.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="input-underline"
                  data-cursor
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="input-underline"
                  data-cursor
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input-underline"
                  data-cursor
                />
                <input
                  type="text"
                  placeholder="Preferred Date / Time"
                  className="input-underline"
                  data-cursor
                />
              </div>
              <textarea
                rows={3}
                placeholder="Inquiry / Service request details"
                className="input-underline resize-none"
                data-cursor
              />

              <button
                type="submit"
                className="text-[11px] tracking-[0.25em] uppercase text-[#B8925C] border border-[#B8925C]/40 px-8 py-3.5 hover:bg-[#B8925C]/10 transition-all duration-500"
                data-cursor
              >
                Send Request
              </button>
            </form>
          )}

          {/* Monochrome Styled Google Map */}
          <div className="relative aspect-video w-full overflow-hidden border border-white/5 grayscale brightness-[85%] hover:grayscale-0 transition-all duration-700">
            <iframe
              title="Monochrome Map Fifth Avenue New York"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.966215614455!2d-74.00448488459497!3d40.75513057932724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6d3c2b9%3A0x3f0b5b8b5b8b5b8b!2sFifth%20Avenue!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#0B0B0B]/10 pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  )
}
