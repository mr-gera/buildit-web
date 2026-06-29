import type { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

type SectionHeadingProps = {
  title: ReactNode
  eyebrow?: ReactNode
  description?: ReactNode
  align?: 'center' | 'left'
  className?: string
}

/** Reusable centered (or left-aligned) section title + optional eyebrow/desc. */
export function SectionHeading({
  title,
  eyebrow,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && <div>{eyebrow}</div>}
      <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl md:text-[2rem]">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-text-muted">{description}</p>
      )}
    </div>
  )
}
