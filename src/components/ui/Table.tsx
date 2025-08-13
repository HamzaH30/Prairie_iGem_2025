import React from 'react'

interface TableProps {
  children: React.ReactNode
  variant?: 'striped' | 'default'
  className?: string
}

// Responsive table wrapper with optional striped styling
export function Table({
  children,
  variant = 'default',
  className = '',
}: TableProps) {
  const baseStyles = 'w-full text-left border-collapse'
  const variantStyles = {
    default: '',
    striped: 'table--striped',
  }

  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`
  return (
    <div className="overflow-x-auto">
      <table className={styles}>{children}</table>
      {/* Inline styles for striped variant */}
      <style>{`
        .table--striped tbody tr:nth-child(odd) {
          background-color: rgba(247, 178, 189, 0.1);
        }
        .dark .table--striped tbody tr:nth-child(odd) {
          background-color: rgba(247, 178, 189, 0.05);
        }
      `}</style>
    </div>
  )
}

// Table header section
export function TableHeader({ children }: { children: React.ReactNode }) {
  return (
    <thead className="bg-gray-secondary/30 dark:bg-gray-secondary/10">
      {children}
    </thead>
  )
}

// Table body section
export function TableBody({ children }: { children: React.ReactNode }) {
  return <tbody>{children}</tbody>
}

// Individual table row
export function TableRow({ children }: { children: React.ReactNode }) {
  return (
    <tr className="border-b border-gray-200 dark:border-gray-700">
      {children}
    </tr>
  )
}

// Table header cell
export function TableHead({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return <th className={`px-4 py-3 font-semibold ${className}`}>{children}</th>
}

// Table data cell
export function TableCell({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return <td className={`px-4 py-3 ${className}`}>{children}</td>
}
