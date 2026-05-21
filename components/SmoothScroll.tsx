'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

const SmoothScroll = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouchFirst = window.matchMedia('(pointer: coarse)').matches

    if (prefersReducedMotion || isTouchFirst) {
      return
    }

    const lenis = new Lenis({
      duration: 1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      touchMultiplier: 1,
      wheelMultiplier: 1,
    })

    let rafId = 0

    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return null
}

export default SmoothScroll
