import { Container } from '@/components/common/Container'
import { Badge } from '@/components/common/Badge'
import { Logo } from '@/components/layout/Logo'
import { footerNav } from '@/config/navigation'

export function Footer() {
  return (
    <footer className="border-t border-border-soft bg-white">
      <Container className="flex flex-col items-center gap-6 py-8 text-center md:flex-row md:justify-between md:text-left">
        <Logo className="text-xl" />

        <p className="text-sm text-text-muted">
          © 2026 eBud. All rights reserved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <ul className="flex items-center gap-6">
            {footerNav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-navy/80 transition-colors hover:text-orange"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Badge variant="status" withDot>
            In Development
          </Badge>
        </div>
      </Container>
    </footer>
  )
}
