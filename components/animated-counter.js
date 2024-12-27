'use client'

import { useEffect, useState, useRef } from 'react'

export function AnimatedCounter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const counterRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isInView) return

    let startTime = null
    let animationFrame

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime
      }

      const progress = (currentTime - startTime) / duration
      
      if (progress < 1) {
        setCount(Math.min(Math.floor(end * progress), end))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, isInView])

  return <span ref={counterRef} className="text-4xl font-bold">{count.toLocaleString()}</span>
}

