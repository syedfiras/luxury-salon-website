'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import Image from 'next/image'

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null)
  const imageOverlayRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subheadingRef = useRef<HTMLParagraphElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Reveal text letter by letter (split-text simulation using spans)
    const heading = headingRef.current
    if (heading) {
      const text = heading.innerText
      heading.innerHTML = text
        .split(' ')
        .map(word => `<span class="inline-block overflow-hidden"><span class="reveal-word inline-block translate-y-full transition-transform duration-1000 ease-out">${word}&nbsp;</span></span>`)
        .join('')
      
      const words = heading.querySelectorAll('.reveal-word')
      gsap.to(words, {
        translateY: 0,
        stagger: 0.08,
        duration: 1.3,
        ease: 'power4.out',
        delay: 0.4
      })
    }

    // Subheading fade-in
    gsap.fromTo(subheadingRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 1.0 }
    )

    // Scroll indicator animation
    gsap.fromTo(indicatorRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1.6 }
    )

    // Cinematic zoom on hero background overlay
    gsap.fromTo(imageOverlayRef.current,
      { scale: 1.12, opacity: 0 },
      { scale: 1, opacity: 0.55, duration: 2.8, ease: 'power3.out' }
    )
  }, [])

  const scrollDown = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[100svh] w-full flex items-center justify-center bg-[#0B0B0B] overflow-hidden"
    >
      {/* Background cinematic media with film grain */}
      <div ref={imageOverlayRef} className="absolute inset-0 z-0 opacity-0">
        <Image
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2000"
          alt="Professional makeup artist applying luxury cosmetics"
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale-[20%]"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0B0B0B]/75 mix-blend-multiply" />
        {/* Radial wash to center light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#0B0B0B_100%)] pointer-events-none opacity-90" />
      </div>

      {/* Hero Text Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center select-none">
        <h1
          ref={headingRef}
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-[#F5F4F0] text-5xl md:text-8xl lg:text-[10rem] tracking-tight leading-[1.05] mb-8 font-light"
        >
          The Art of Makeup.
        </h1>
        <p
          ref={subheadingRef}
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-[#9E9E9E] font-light text-xs md:text-sm max-w-xl leading-relaxed tracking-[0.24em] uppercase"
        >
          Bridal glam, editorial looks, and everyday elegance — crafted by artists who understand your unique beauty.
        </p>
      </div>

      {/* Elegant scroll indicator */}
      <div
        ref={indicatorRef}
        onClick={scrollDown}
        className="absolute bottom-12 z-10 flex flex-col items-center gap-3.5 cursor-pointer opacity-0"
        data-cursor
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#B8925C] font-light">
          Scroll to explore
        </span>
        <div className="scroll-line" />
      </div>

      {/* Background grain element just for this section */}
      <div className="film-grain" />
    </section>
  )
}

export default Hero
