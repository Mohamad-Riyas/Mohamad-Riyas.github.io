import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props { children: ReactNode; delay?: number; className?: string; y?: number }

/** Fades and lifts content in once when it scrolls into view. */
export default function Reveal({ children, delay = 0, className, y = 22 }: Props) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
