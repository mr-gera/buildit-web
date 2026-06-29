import { useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

type PhoneMockupProps = {
  /** Screenshot path under /public (e.g. "/screens/projects-en.png"). */
  src?: string
  alt: string
  /** Rendered inside the phone frame if the image is missing or fails. */
  fallback?: ReactNode
  className?: string
}

/**
 * A dark rounded phone frame with an inner screenshot.
 *
 * If `src` is missing or the image fails to load, it gracefully renders
 * `fallback` (a CSS placeholder) instead of a broken image — so the page
 * works with or without real screenshots in /public/screens.
 */
export function PhoneMockup({ src, alt, fallback, className }: PhoneMockupProps) {
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(src) && !failed

  return (
    <div
      className={cn(
        'relative aspect-[9/19.5] w-full overflow-hidden rounded-[2rem] border-[6px] border-navy bg-navy shadow-phone',
        className,
      )}
    >
      {/* notch */}
      <div className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/30" />

      <div className="h-full w-full overflow-hidden rounded-[1.5rem] bg-white">
        {showImage ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="h-full w-full object-cover object-top"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="h-full w-full" role="img" aria-label={alt}>
            {fallback ?? <DefaultFallback />}
          </div>
        )}
      </div>
    </div>
  )
}

const fallbackDotColors = ['bg-orange', 'bg-green', 'bg-purple', 'bg-red']

/** Lightweight "list screen" placeholder shown when no screenshot exists. */
function DefaultFallback() {
  return (
    <div className="flex h-full w-full flex-col gap-3 bg-slate-50 p-4">
      <div className="mb-1 h-5 w-1/2 rounded-md bg-navy/80" />
      <div className="flex gap-2">
        <div className="h-6 w-14 rounded-full bg-navy" />
        <div className="h-6 w-14 rounded-full bg-white shadow-sm" />
        <div className="h-6 w-14 rounded-full bg-white shadow-sm" />
      </div>
      {fallbackDotColors.map((dot, i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-card"
        >
          <span className="h-7 w-7 shrink-0 rounded-lg bg-slate-100" />
          <div className="flex-1 space-y-2">
            <div className="h-2.5 w-3/4 rounded bg-navy/20" />
            <div className="h-2 w-1/2 rounded bg-navy/10" />
          </div>
          <span className={cn('h-2.5 w-2.5 rounded-full', dot)} />
        </div>
      ))}
    </div>
  )
}
