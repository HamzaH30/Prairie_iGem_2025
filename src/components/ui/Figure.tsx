interface FigureProps {
  src?: string
  alt: string
  caption?: string
  className?: string
}

// Image figure component with optional caption and placeholder support
export function Figure({ src, alt, caption, className = '' }: FigureProps) {
  return (
    <figure className={`my-6 ${className}`}>
      {/* Render image or placeholder if no src provided */}
      {src ? (
        <img src={src} alt={alt} className="rounded-md w-full h-auto" />
      ) : (
        <div className="image-placeholder">{alt || 'DROP IMAGE'}</div>
      )}

      {/* Optional caption below image */}
      {caption && (
        <figcaption className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
