import { Link, useLocation } from 'react-router-dom'
import { X } from 'lucide-react'

// Props for controlling navigation visibility
interface LeftNavigationProps {
  isOpen: boolean
  toggleNav: () => void
}

// Responsive left navigation drawer with site links
export function LeftNavigation({ isOpen, toggleNav }: LeftNavigationProps) {
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

  // Responsive navigation container with slide animation
  const navClasses = `fixed md:static top-0 left-0 z-50 h-full w-64 md:w-56 lg:w-64 
    transform ${
      isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
    } 
    transition-transform duration-200 ease-in-out
    bg-gradient-to-b from-[#FCE7F3] to-[#DCFCE7] md:flex flex-col`

  return (
    <nav className={navClasses}>
      {/* Header with logo and close button */}
      <div className="flex items-center justify-between p-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src="/CopyPage.png"
              alt="LacThera Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-bold text-lg text-violet-text">LacThera</span>
        </Link>

        {/* Mobile close button */}
        <button
          className="md:hidden text-violet-text"
          onClick={toggleNav}
          aria-label="Close navigation"
        >
          <X size={20} />
        </button>
      </div>

      {/* Scrollable navigation links */}
      <div className="flex flex-col flex-1 overflow-y-auto px-2 py-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`px-4 py-2 my-1 rounded-md text-sm font-medium transition-colors
              ${
                location.pathname === item.href
                  ? 'bg-white/50 text-violet-text font-semibold'
                  : 'text-violet-text/80 hover:bg-white/30'
              }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Footer branding */}
      <div className="p-4 text-xs text-center text-violet-text/70">
        Prairie iGEM 2025
      </div>
    </nav>
  )
}
