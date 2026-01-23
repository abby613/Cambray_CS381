import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function useScrollFade() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return { ref, opacity }
}
