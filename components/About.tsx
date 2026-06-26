'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import Image from 'next/image'

export default function About() {
  const containerRef = useRef<HTMLElement>(null)
  const isContainerInView = useInView(containerRef, { once: true, amount: 0.15 })
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isContainerInView) return

    // GSAP Stats counter logic
    const statsElements = statsRef.current?.querySelectorAll('.stat-val')
    statsElements?.forEach((el) => {
      const targetStr = el.getAttribute('data-target') || '0'
      const targetVal = parseFloat(targetStr)
      if (isNaN(targetVal)) return

      const progress = { val: 0 }
      gsap.to(progress, {
        val: targetVal,
        duration: 2.2,
        ease: 'power3.out',
        onUpdate: () => {
          if (targetStr.includes('min')) {
            el.textContent = `${Math.floor(progress.val)} min`
          } else if (targetStr.includes(':')) {
            el.textContent = '1:1'
          } else {
            el.textContent = Math.floor(progress.val).toString()
          }
        }
      })
    })
  }, [isContainerInView])

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative min-h-screen bg-[#0B0B0B] py-28 md:py-40 px-6 lg:px-16 overflow-hidden border-t border-white/5"
    >
      {/* Structural layout thin grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex justify-between z-0">
        <div className="w-[1px] h-full bg-white/5 ml-[12%]" />
        <div className="w-[1px] h-full bg-white/5 ml-[50%]" />
        <div className="w-[1px] h-full bg-white/5 mr-[12%]" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
        {/* Column 1: Cinematic Portrait Image & Abstract Architectural CAD Drawing Overlay */}
        <div className="lg:col-span-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={isContainerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[3/4] w-full overflow-hidden border border-white/5 img-mask"
          >
            <Image
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=90"
              alt="Luxury minimal salon workspace with clean design lines, marble textures and custom wood panels"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
            {/* Cinematic shadows */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Floating structural frame CAD lines representing master craftsmanship */}
          <div className="absolute -bottom-8 -right-8 w-44 h-44 border border-[#B8925C]/20 pointer-events-none hidden md:block">
            <div className="absolute top-0 left-0 w-3 h-px bg-[#B8925C]" />
            <div className="absolute top-0 left-0 h-3 w-px bg-[#B8925C]" />
            <div className="absolute bottom-0 right-0 w-3 h-px bg-[#B8925C]" />
            <div className="absolute bottom-0 right-0 h-3 w-px bg-[#B8925C]" />
          </div>
        </div>

        {/* Column 2: Editorial Philosophy & Milestone Timelines */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="section-label">Our Philosophy</span>
            <span className="accent-line" />
          </div>

          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-[#F5F4F0] text-3xl md:text-5xl leading-tight mb-8 font-light"
          >
            Sculpting Space, Structure & Self.
          </h2>

          <div className="space-y-6 text-[#9E9E9E] font-light leading-relaxed text-sm md:text-base">
            <p>
              Founded in New York, <span className="text-[#B8925C] font-normal">LUXE Studio</span> operates as a private atelier for considered hair, skin, and grooming. We treat styling not as decoration, but as architecture. We examine the bone structure, listen to lifestyle rhythms, and refine detail by detail.
            </p>
            <p>
              Our work is at its best when it looks effortless. We seek a measured sense of ease, creating custom care formulas tailored to your history. True luxury is unhurried.
            </p>
          </div>

          {/* Luxury Full-Width Typography Blockquote */}
          <blockquote className="mt-8 border-l-2 border-[#B8925C] pl-6 italic font-serif text-lg text-[#F5F4F0] leading-relaxed">
            &ldquo;Details are not the design. Details define the lifestyle.&rdquo;
          </blockquote>

          {/* Animated Statistics */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12 pt-8 border-t border-white/[0.08]"
          >
            <div>
              <div className="text-2xl md:text-3xl font-light text-[#B8925C] mb-1 font-serif">
                <span className="stat-val" data-target="2015">0</span>
              </div>
              <p className="text-[9px] uppercase tracking-widest text-[#9E9E9E] font-sans">Established</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-light text-[#B8925C] mb-1 font-serif">
                <span className="stat-val" data-target="12">0</span>
              </div>
              <p className="text-[9px] uppercase tracking-widest text-[#9E9E9E] font-sans">Artists</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-light text-[#B8925C] mb-1 font-serif">
                <span className="stat-val" data-target="40">0</span>
              </div>
              <p className="text-[9px] uppercase tracking-widest text-[#9E9E9E] font-sans">Min Consultation</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-light text-[#B8925C] mb-1 font-serif">
                <span className="stat-val" data-target="1">1:1</span>
              </div>
              <p className="text-[9px] uppercase tracking-widest text-[#9E9E9E] font-sans">Personal Flow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
