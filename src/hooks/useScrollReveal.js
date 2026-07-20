'use client'
import { useEffect, useRef } from 'react'

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    const children = node.querySelectorAll('.fade-up')
    children.forEach((child) => observer.observe(child))

    // Also observe the container itself if it has fade-up
    if (node.classList.contains('fade-up')) {
      observer.observe(node)
    }

    return () => observer.disconnect()
  }, [threshold])

  return ref
}
