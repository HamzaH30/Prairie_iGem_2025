import React from 'react'
import { Link } from 'react-router-dom'

// Button component props with styling and behavior options
interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  href?: string // If provided, renders as Link instead of button
  onClick?: () => void
  className?: string
}

// Flexible button component that can render as button or link
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
}: ButtonProps) {
  // Base styles applied to all buttons
  const baseStyles =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50'

  // Color variants for different button types
  const variantStyles = {
    primary: 'bg-pink-primary hover:bg-pink-primary/90 text-violet-text',
    secondary: 'bg-gray-secondary hover:bg-gray-secondary/90 text-violet-text',
  }

  // Size variants for different button sizes
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sizeStyles = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-11 px-6 text-lg',
  }

  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  // Render as Link for navigation, otherwise as button
  if (href) {
    return (
      <Link to={href} className={styles}>
        {children}
      </Link>
    )
  }

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  )
}
