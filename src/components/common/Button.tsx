import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/40 disabled:opacity-60 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  primary: 'bg-navy text-white hover:bg-navy-soft',
  secondary:
    'bg-white text-navy ring-1 ring-border-soft hover:bg-slate-50',
  ghost: 'text-navy hover:bg-slate-100',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
}

type CommonProps = {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' }

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

/**
 * Shared button. Reserved for the future dashboard (auth, actions).
 * The landing page is informational and intentionally form/CTA-free.
 */
export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children } = props

  if (props.as === 'a') {
    const { as: _as, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props
    void _as
    void _v
    void _s
    void _c
    void _ch
    return (
      <a className={cn(base, variants[variant], sizes[size], className)} {...rest}>
        {children}
      </a>
    )
  }

  const { as: _as, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props
  void _as
  void _v
  void _s
  void _c
  void _ch
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  )
}
