import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

type ContainerProps = {
  as?: ElementType
  className?: string
  children: ReactNode
}

/** Centered, max-width page container with responsive horizontal padding. */
export function Container({ as: Tag = 'div', className, children }: ContainerProps) {
  return <Tag className={cn('container-page', className)}>{children}</Tag>
}
