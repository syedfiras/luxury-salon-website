'use client'

import type { ReactNode } from 'react'
import { MotionConfig } from 'framer-motion'

type MotionPreferencesProps = {
  children: ReactNode
}

const MotionPreferences = ({ children }: MotionPreferencesProps) => {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

export default MotionPreferences
