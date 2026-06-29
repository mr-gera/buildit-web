import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { PhoneMockup } from '@/components/common/PhoneMockup'
import { featureScreens } from '@/data/landing'
import { accentChip } from '@/lib/utils/accent'
import { cn } from '@/lib/utils/cn'

export function ScreensShowcaseSection() {
  return (
    <section id="screens" className="bg-slate-50/60 py-16 sm:py-20">
      <Container>
        <SectionHeading title="A complete workflow in one app" />

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {featureScreens.map(({ icon: Icon, title, subtitle, image, alt }) => (
            <article key={title} className="flex flex-col items-center gap-4 text-center">
              <header className="flex flex-col items-center gap-2">
                <span
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-lg',
                    accentChip.navy,
                  )}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="text-sm font-bold text-navy">{title}</h3>
                <p className="text-xs text-text-muted">{subtitle}</p>
              </header>

              <div className="w-40 sm:w-44 lg:w-full lg:max-w-[180px]">
                <PhoneMockup src={image} alt={alt} />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
