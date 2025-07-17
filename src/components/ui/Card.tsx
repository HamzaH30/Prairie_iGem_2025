import React from 'react'

// Main card component props
interface CardProps {
  children: React.ReactNode
  variant?: 'info' | 'team'
  className?: string
}

// Flexible card container with different styling variants
export function Card({
  children,
  variant = 'info',
  className = '',
}: CardProps) {
  const baseStyles = 'rounded-lg overflow-hidden shadow-md'

  // Different card styles for different content types
  const variantStyles = {
    info: 'bg-white dark:bg-[#482f48]/80 border border-gray-200 dark:border-gray-700',
    team: 'bg-white dark:bg-[#482f48]/80 border border-pink-primary',
  }

  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`

  return <div className={styles}>{children}</div>
}

// Card header section with bottom border
export function CardHeader({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`p-4 border-b border-gray-200 dark:border-gray-700 ${className}`}
    >
      {children}
    </div>
  )
}

// Main card content area
export function CardContent({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`p-4 ${className}`}>{children}</div>
}

// Card footer section with top border
export function CardFooter({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`p-4 border-t border-gray-200 dark:border-gray-700 ${className}`}
    >
      {children}
    </div>
  )
}
