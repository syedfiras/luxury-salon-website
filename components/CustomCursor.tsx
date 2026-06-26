'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      gsap.to(dot, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: 'power3.out',
      })
      // Ensure visible when moving inside window
      gsap.to([dot, ring], { opacity: 1, duration: 0.2 })
    }

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      gsap.set(ring, { x: ringX, y: ringY })
      requestAnimationFrame(animateRing)
    }

    const onEnterHoverable = () => {
      document.body.classList.add('cursor-hover')
    }

    const onLeaveHoverable = () => {
      document.body.classList.remove('cursor-hover')
    }

    const onMouseLeaveWindow = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.3 })
    }

    const onMouseEnterWindow = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.2 })
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onMouseLeaveWindow)
    document.addEventListener('mouseenter', onMouseEnterWindow)
    
    const raf = requestAnimationFrame(animateRing)

    const addHoverListeners = () => {
      const interactives = document.querySelectorAll('a, button, input, textarea, select, [data-cursor]')
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', onEnterHoverable)
        el.addEventListener('mouseleave', onLeaveHoverable)
      })
    }

    addHoverListeners()

    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onMouseLeaveWindow)
      document.removeEventListener('mouseenter', onMouseEnterWindow)
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" style={{ opacity: 0 }} aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring hidden md:block" style={{ opacity: 0 }} aria-hidden="true" />
    </>
  )
}
