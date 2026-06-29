import { Fragment } from 'react'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { useI18n } from '@/i18n/useI18n'
import { useLanding } from '@/i18n/useLanding'
import { accentChip } from '@/lib/utils/accent'
import { cn } from '@/lib/utils/cn'

export function WorkflowSection() {
  const { t } = useI18n()
  const { workflowSteps } = useLanding()

  return (
    <section className="bg-slate-50/60 py-16 sm:py-20">
      <Container>
        <SectionHeading title={t.workflow.heading} />

        <div className="mt-12 grid gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-start md:gap-2">
          {workflowSteps.map(({ icon: Icon, accent, title, text }, index) => (
            <Fragment key={title}>
              <article className="flex flex-col items-center gap-3 text-center md:px-2">
                <span
                  className={cn(
                    'flex h-14 w-14 items-center justify-center rounded-2xl',
                    accentChip[accent],
                  )}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-base font-bold text-navy">{title}</h3>
                <p className="max-w-[15rem] text-sm leading-relaxed text-text-muted">
                  {text}
                </p>
              </article>

              {index < workflowSteps.length - 1 && (
                <div
                  className="flex items-center justify-center pt-5 md:pt-5"
                  aria-hidden="true"
                >
                  <ArrowRight className="hidden h-6 w-6 text-border-soft md:block" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </Container>
    </section>
  )
}
