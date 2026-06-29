import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Badge } from '@/components/common/Badge'
import { Logo } from '@/components/layout/Logo'
import { landingNav } from '@/config/navigation'
import { cn } from '@/lib/utils/cn'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft/70 bg-white/85 backdrop-blur">
      <Container as="nav" aria-label="Primary" className="flex h-16 items-center justify-between gap-4">
        <a href="#top" className="shrink-0" aria-label="eBud home">
          <Logo />
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {landingNav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-navy/80 transition-colors hover:text-orange"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Badge variant="status" withDot>
            In Development
          </Badge>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-border-soft bg-white transition-all md:hidden',
          open ? 'max-h-80' : 'max-h-0 border-t-0',
        )}
      >
        <Container className="flex flex-col gap-1 py-3">
          {landingNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2.5 text-sm font-medium text-navy/80 hover:bg-slate-50 hover:text-orange"
            >
              {item.label}
            </a>
          ))}
          <div className="px-2 py-2">
            <Badge variant="status" withDot>
              In Development
            </Badge>
          </div>
        </Container>
      </div>
    </header>
  )
}
