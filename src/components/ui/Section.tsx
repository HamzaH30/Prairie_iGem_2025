import React, { useEffect, useState, useRef } from 'react'
import { useOutletContext } from 'react-router-dom'

// Props for page sections with scroll-based animations
interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
  className?: string
}

// Page section with fade-in animation when scrolled into view
export function Section({ id, title, children, className = '' }: SectionProps) {
  const { reducedMotion } = useOutletContext<{
    reducedMotion: boolean
  }>()

  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Watch for section entering viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target) // Only animate once
        }
      },
      {
        threshold: 0.1, // Trigger when 10% visible
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Apply animation classes when visible (respecting user preferences)
  const animationClass = !reducedMotion && isVisible ? 'animate-fade-in' : ''

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`my-12 scroll-mt-20 ${animationClass} ${className}`}
    >
      <h2 className="text-3xl font-semibold mb-6">{title}</h2>
      {/* Content with slide-up animation */}
      <div className={!reducedMotion && isVisible ? 'animate-slide-up' : ''}>
        {children}
      </div>
    </section>
  )
}
