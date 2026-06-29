import { Link } from 'react-router-dom'
import { Container } from '@/components/common/Container'
import { Logo } from '@/components/layout/Logo'
import { useI18n } from '@/i18n/useI18n'

export default function NotFoundPage() {
  const { t } = useI18n()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <Container className="flex flex-col items-center gap-6 text-center">
        <Logo />
        <p className="text-7xl font-extrabold tracking-tight text-navy">{t.notFound.code}</p>
        <h1 className="text-xl font-bold text-navy">{t.notFound.title}</h1>
        <p className="max-w-md text-sm text-text-muted">{t.notFound.description}</p>
        <Link
          to="/"
          className="inline-flex h-11 items-center justify-center rounded-xl bg-navy px-5 text-sm font-semibold text-white transition-colors hover:bg-navy-soft"
        >
          {t.notFound.back}
        </Link>
      </Container>
    </div>
  )
}
