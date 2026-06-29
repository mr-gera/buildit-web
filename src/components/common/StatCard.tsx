import type { LucideIcon } from 'lucide-react'
import type { AccentColor } from '@/data/landing'
import { accentChip } from '@/lib/utils/accent'
import { cn } from '@/lib/utils/cn'

type StatCardProps = {
  icon: LucideIcon
  value: string
  label: string
  accent?: AccentColor
  className?: string
}

/**
 * Compact metric card (icon + value + label). Used inside the CSS phone
 * mockups and ready for the future analytics dashboard.
 */
export function StatCard({
  icon: Icon,
  value,
  label,
  accent = 'navy',
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-xl border border-border-soft bg-white p-3',
        className,
      )}
    >
      <span
        className={cn(
          'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg',
          accentChip[accent],
        )}
      >
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <div className="text-sm font-bold text-navy">{value}</div>
        <div className="truncate text-xs text-text-muted">{label}</div>
      </div>
    </div>
  )
}
