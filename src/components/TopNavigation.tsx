import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

// Props for controlling navigation drawer state
interface TopNavigationProps {
  isOpen: boolean
  toggleNav: () => void
}

// Top navigation bar with logo and sliding mobile menu
export function TopNavigation({ isOpen, toggleNav }: TopNavigationProps) {
  const location = useLocation()

  // Main navigation menu items
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Engineering Design', href: '/design' },
    { name: 'Experiments', href: '/experiments' },
    { name: 'Modeling', href: '/modeling' },
    { name: 'Human Practices', href: '/human-practices' },
    { name: 'Entrepreneurship', href: '/entrepreneurship' },
    { name: 'Team', href: '/team' },
    { name: 'Notebook', href: '/notebook' },
    { name: 'Safety', href: '/safety' },
    { name: 'References', href: '/references' },
  ]

  return (
    <>
      {/* Main navigation bar */}
      <div className="bg-gradient-to-r from-[#FCE7F3] to-[#DCFCE7] shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and branding */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                {/* TODO: Add logo */}
              </div>
              <span className="font-bold text-lg text-violet-text">
                LacThera
              </span>
            </Link>

            {/* Center branding text - hidden on small screens */}
            <div className="hidden sm:block text-sm text-violet-text/70">
              Prairie iGEM 2025
            </div>

            {/* Mobile menu toggle button */}
            <button
              className="p-2 text-violet-text"
              onClick={toggleNav}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Sliding navigation drawer */}
      <div
        className={`fixed top-16 right-0 z-50 h-[calc(100vh-4rem)] w-64 
          transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
          transition-transform duration-300 ease-in-out 
          bg-white dark:bg-[#482f48]/90 shadow-lg overflow-y-auto`}
      >
        <div className="py-4">
          <div className="px-2 pb-3 space-y-1">
            {/* Navigation links */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === item.href
                    ? 'bg-gradient-to-r from-[#FCE7F3] to-[#DCFCE7] text-violet-text font-semibold'
                    : 'text-violet-text/80 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={toggleNav}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile-only branding */}
            <div className="px-3 py-2 text-xs text-center text-violet-text/70 sm:hidden">
              Prairie iGEM 2025
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={toggleNav}
          aria-hidden="true"
        />
      )}
    </>
  )
}
