import { Check } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { roleCards } from '@/data/landing'
import { accentChip } from '@/lib/utils/accent'
import { cn } from '@/lib/utils/cn'

export function RolesSection() {
  return (
    <section id="roles" className="py-16 sm:py-20">
      <Container>
        <SectionHeading title="Built for every role on site" />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {roleCards.map(({ icon: Icon, accent, title, description, bullets }) => (
            <article
              key={title}
              className="flex flex-col gap-5 rounded-2xl border border-border-soft bg-white p-7 shadow-card"
            >
              <div className="flex items-center gap-4">
                <span
                  className={cn(
                    'flex h-14 w-14 items-center justify-center rounded-2xl',
                    accentChip[accent],
                  )}
                >
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-bold text-navy">{title}</h3>
              </div>

              <p className="text-sm leading-relaxed text-text-muted">{description}</p>

              <ul className="flex flex-col gap-2.5">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2.5 text-sm text-navy">
                    <Check className="h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
