import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

// Props for individual accordion sections
interface AccordionItemProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

// Individual collapsible accordion item
export function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      {/* Clickable header with toggle icon */}
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-medium">{title}</span>
        <ChevronDown
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
          size={20}
        />
      </button>
      {/* Collapsible content area */}
      <div
        className={`overflow-hidden transition-all ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="p-6 pt-0">{children}</div>
      </div>
    </div>
  )
}

// Props for accordion container
interface AccordionProps {
  children: React.ReactNode
  className?: string
}

// Main accordion wrapper - contains multiple AccordionItems
export function Accordion({ children, className = '' }: AccordionProps) {
  return (
    <div
      className={`border border-gray-200 dark:border-gray-700 rounded-md ${className}`}
    >
      {children}
    </div>
  )
}
