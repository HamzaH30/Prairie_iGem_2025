interface CodeBlockProps {
  children: string
  language?: string
  className?: string
}

// Styled code block with syntax highlighting header and scrollable content
export function CodeBlock({
  children,
  language = 'bash',
  className = '',
}: CodeBlockProps) {
  return (
    <div
      className={`bg-[#482f48]/10 dark:bg-[#482f48]/30 rounded-md overflow-hidden ${className}`}
    >
      {/* Language label header */}
      <div className="bg-[#482f48]/20 dark:bg-[#482f48]/50 px-4 py-2 text-sm font-mono">
        {language}
      </div>
      {/* Scrollable code content */}
      <pre className="p-4 overflow-x-auto">
        <code className="font-mono text-sm">{children}</code>
      </pre>
    </div>
  )
}
