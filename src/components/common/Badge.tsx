import type { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

type BadgeVariant = 'status' | 'orange' | 'navy' | 'green' | 'neutral'

type BadgeProps = {
  children: ReactNode
  variant?: BadgeVariant
  /** Show a small leading dot (used by the "In Development" status badge). */
  withDot?: boolean
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  status: 'bg-orange-soft text-orange ring-1 ring-orange/20',
  orange: 'bg-orange-soft text-orange',
  navy: 'bg-blue-soft text-navy-soft',
  green: 'bg-green/10 text-green',
  neutral: 'bg-slate-100 text-text-muted',
}

export function Badge({
  children,
  variant = 'neutral',
  withDot = false,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide',
        variantStyles[variant],
        className,
      )}
    >
      {withDot && (
        <span
          className="h-1.5 w-1.5 rounded-full bg-current"
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  )
}
