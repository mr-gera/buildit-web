import { cn } from '@/lib/utils/cn'

/** eBud wordmark. The dot accent echoes the brand orange. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('text-2xl font-extrabold tracking-tight text-navy', className)}>
      eBud
      <span className="text-orange">.</span>
    </span>
  )
}
