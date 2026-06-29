import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { problemCards } from '@/data/landing'
import { accentChip } from '@/lib/utils/accent'
import { cn } from '@/lib/utils/cn'

export function ProblemSection() {
  return (
    <section id="features" className="py-16 sm:py-20">
      <Container>
        <SectionHeading title="eBud for the realities of construction" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problemCards.map(({ icon: Icon, accent, title, text }) => (
            <article
              key={title}
              className="flex flex-col gap-3 rounded-2xl border border-border-soft bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <span
                className={cn(
                  'flex h-11 w-11 items-center justify-center rounded-xl',
                  accentChip[accent],
                )}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-base font-bold text-navy">{title}</h3>
              <p className="text-sm leading-relaxed text-text-muted">{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
