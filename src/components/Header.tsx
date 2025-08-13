import React from 'react'
import { Menu } from 'lucide-react'

// Props for header component with menu toggle functions
interface HeaderProps {
  toggleSidebar: () => void
  toggleNav: () => void
}

// Sticky header with responsive navigation toggles
export function Header({ toggleSidebar, toggleNav }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-[#482f48] shadow-sm h-16 flex items-center px-4">
      <div className="flex items-center justify-between w-full">
        {/* Left side with menu buttons and mobile logo */}
        <div className="flex items-center gap-4">
          {/* Mobile navigation toggle */}
          <button
            className="p-2 md:hidden"
            onClick={toggleNav}
            aria-label="Toggle navigation"
          >
            <Menu size={24} />
          </button>

          {/* Desktop sidebar toggle */}
          <button
            className="p-2 hidden md:block"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            <Menu size={20} />
          </button>

          {/* Mobile-only logo */}
          <span className="text-lg font-semibold md:hidden">LacThera</span>
        </div>

        {/* Right side reserved for additional header elements */}
        <div className="flex items-center gap-2">
          {/* Add any header elements here if needed */}
        </div>
      </div>
    </header>
  )
}
