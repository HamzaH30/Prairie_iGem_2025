import React, { useState, Children } from 'react'

// Props for individual tab content
interface TabProps {
  title: string
  children: React.ReactNode
}

// Individual tab component - wraps content for each tab
export function Tab({ title, children }: TabProps) {
  return <div>{children}</div>
}

// Props for the main tabs container
interface TabsProps {
  children: React.ReactNode
  className?: string
}

// Tabs component with clickable headers and content switching
export function Tabs({ children, className = '' }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0)
  const tabs = Children.toArray(children)

  return (
    <div className={className}>
      {/* Tab headers - clickable buttons */}
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab, index) => {
          const tabProps = (tab as React.ReactElement).props
          return (
            <button
              key={index}
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === index
                  ? 'border-b-2 border-pink-primary text-pink-primary'
                  : 'text-gray-600 dark:text-gray-400 hover:text-pink-primary'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tabProps.title}
            </button>
          )
        })}
      </div>
      {/* Active tab content */}
      <div className="py-4">{tabs[activeTab]}</div>
    </div>
  )
}
