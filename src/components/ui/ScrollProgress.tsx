import React, { useEffect, useState } from 'react'

// Visual scroll progress indicator for page navigation
export function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    // Calculate scroll percentage based on page position
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight
      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100
      setScrollPercentage(scrolled)
    }

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    // Fixed progress bar at top of viewport
    <div className="fixed top-16 left-0 w-full h-1 bg-gray-200 z-30">
      <div
        className="h-full bg-pink-primary"
        style={{
          width: `${scrollPercentage}%`,
        }}
      />
    </div>
  )
}
