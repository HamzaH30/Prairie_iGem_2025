import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { TopNavigation } from './TopNavigation'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'
import { ScrollProgress } from './ui/ScrollProgress'

// Main application layout with navigation, sidebar, and accessibility controls
export function Layout() {
  // Accessibility and UI preferences
  const [reducedMotion, setReducedMotion] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [textToSpeech, setTextToSpeech] = useState(false)

  // Navigation state
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isNavOpen, setIsNavOpen] = useState(false)

  // Detect user's motion preferences
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Apply dark mode to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  // Toggle functions for navigation
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-violet-text">
      {/* Top navigation bar */}
      <TopNavigation isOpen={isNavOpen} toggleNav={toggleNav} />

      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Main content area with sidebar */}
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <div className="container mx-auto">
            {/* Accessibility controls panel */}
            <div className="sticky top-20 z-10 bg-white dark:bg-[#482f48] p-2 rounded-lg mb-4 flex gap-2 justify-end">
              {/* Animation toggle */}
              <button
                className={`px-3 py-1 text-sm rounded-md ${
                  !reducedMotion ? 'bg-pink-primary' : 'bg-gray-200'
                }`}
                onClick={() => setReducedMotion(!reducedMotion)}
              >
                Animations {reducedMotion ? 'Off' : 'On'}
              </button>

              {/* Dark mode toggle */}
              {/* <button
                className={`px-3 py-1 text-sm rounded-md ${
                  darkMode ? 'bg-pink-primary' : 'bg-gray-200'
                }`}
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button> */}

              {/* Text-to-speech toggle */}
              {/* <button
                className={`px-3 py-1 text-sm rounded-md ${
                  textToSpeech ? 'bg-pink-primary' : 'bg-gray-200'
                }`}
                onClick={() => setTextToSpeech(!textToSpeech)}
              >
                Text-to-Speech {textToSpeech ? 'On' : 'Off'}
              </button> */}
            </div>

            {/* Page content with accessibility context */}
            <Outlet
              context={{
                reducedMotion,
                textToSpeech,
              }}
            />
          </div>
        </main>
      </div>

      {/* Site footer */}
      <Footer />
    </div>
  )
}
