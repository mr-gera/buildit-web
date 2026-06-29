import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Badge } from '@/components/common/Badge'
import { roadmapItems } from '@/data/landing'
import { accentChip } from '@/lib/utils/accent'
import { cn } from '@/lib/utils/cn'

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Product roadmap"
          eyebrow={<Badge variant="orange">MVP in progress</Badge>}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roadmapItems.map(({ icon: Icon, accent, title, text, time }) => (
            <article
              key={title}
              className="flex flex-col gap-3 rounded-2xl border border-border-soft bg-white p-6 shadow-card"
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
              <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-orange">
                {time}
              </span>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-text-muted">
          The roadmap is informational and may change as the product evolves.
        </p>
      </Container>
    </section>
  )
}
