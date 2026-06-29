import { Link } from 'react-router-dom'
import { Container } from '@/components/common/Container'
import { Logo } from '@/components/layout/Logo'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <Container className="flex flex-col items-center gap-6 text-center">
        <Logo />
        <p className="text-7xl font-extrabold tracking-tight text-navy">404</p>
        <h1 className="text-xl font-bold text-navy">Page not found</h1>
        <p className="max-w-md text-sm text-text-muted">
          The page you’re looking for doesn’t exist yet. eBud is still in
          development — more is on the way.
        </p>
        <Link
          to="/"
          className="inline-flex h-11 items-center justify-center rounded-xl bg-navy px-5 text-sm font-semibold text-white transition-colors hover:bg-navy-soft"
        >
          Back to home
        </Link>
      </Container>
    </div>
  )
}
