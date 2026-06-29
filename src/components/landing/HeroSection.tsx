import { CheckCircle2, Boxes } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Badge } from '@/components/common/Badge'
import { PhoneMockup } from '@/components/common/PhoneMockup'
import { useI18n } from '@/i18n/useI18n'
import { useLanding } from '@/i18n/useLanding'

export function HeroSection() {
  const { t } = useI18n()
  const { heroScreens } = useLanding()

  return (
    <section id="top" className="relative overflow-hidden pt-12 pb-16 sm:pt-16 lg:pt-20">
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-orange-soft blur-3xl opacity-60" />
        <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-blue-soft blur-3xl opacity-70" />
      </div>

      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-10">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <Badge variant="orange" className="w-fit tracking-widest">
            {t.hero.badge}
          </Badge>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]">
            {t.hero.titleLead}
            <span className="text-orange">{t.hero.titleHighlight}</span>
          </h1>

          <p className="max-w-xl text-lg text-text-muted">{t.hero.description}</p>

          <ul className="flex flex-col gap-3 sm:flex-row sm:gap-8">
            {t.hero.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm font-medium text-navy">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-green" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex max-w-xl items-start gap-4 rounded-2xl bg-blue-soft p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-navy-soft shadow-sm">
              <Boxes className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-sm text-navy/80">
              <span className="font-semibold text-navy">eBud</span> {t.hero.note}
            </p>
          </div>
        </div>

        {/* Right — three overlapping phone mockups */}
        <HeroPhones screens={heroScreens} />
      </Container>
    </section>
  )
}

function HeroPhones({ screens }: { screens: { image: string; alt: string }[] }) {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="relative flex items-center justify-center">
        {/* left phone */}
        <div className="absolute left-0 top-8 z-10 w-[38%] -rotate-6 sm:w-[40%]">
          <PhoneMockup src={screens[0].image} alt={screens[0].alt} />
        </div>

        {/* right phone */}
        <div className="absolute right-0 top-8 z-10 w-[38%] rotate-6 sm:w-[40%]">
          <PhoneMockup src={screens[2].image} alt={screens[2].alt} />
        </div>

        {/* center phone (front) */}
        <div className="relative z-20 w-[44%] sm:w-[46%]">
          <PhoneMockup src={screens[1].image} alt={screens[1].alt} />
        </div>
      </div>
    </div>
  )
}
