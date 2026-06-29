import { PencilRuler, MessagesSquare, FileCheck2 } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { developmentChips } from '@/data/landing'

const chipIcons = [PencilRuler, MessagesSquare, FileCheck2]

export function DevelopmentBanner() {
  return (
    <section id="development" className="relative overflow-hidden bg-blue-soft py-14">
      {/* building silhouettes */}
      <CitySilhouette />

      <Container className="relative">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-5">
            <CraneIllustration />
            <div className="max-w-md">
              <h2 className="text-2xl font-extrabold tracking-tight text-navy">
                eBud is in active development.
              </h2>
              <p className="mt-2 text-sm text-navy/70">
                We’re building a better way to manage construction projects from
                the ground up.
              </p>
            </div>
          </div>

          <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3 lg:w-auto">
            {developmentChips.map((chip, index) => {
              const Icon = chipIcons[index] ?? PencilRuler
              return (
                <li
                  key={chip}
                  className="flex items-center gap-3 rounded-xl border border-white bg-white/70 px-4 py-3 text-sm font-medium text-navy"
                >
                  <Icon className="h-5 w-5 shrink-0 text-orange" aria-hidden="true" />
                  {chip}
                </li>
              )
            })}
          </ul>
        </div>

        <p className="mt-10 text-center text-sm font-medium text-navy/60">
          Landing page concept / product preview
        </p>
      </Container>
    </section>
  )
}

/** Simple CSS/SVG tower-crane illustration — no external dependency. */
function CraneIllustration() {
  return (
    <svg
      width="72"
      height="84"
      viewBox="0 0 72 84"
      fill="none"
      className="hidden shrink-0 text-navy sm:block"
      aria-hidden="true"
    >
      {/* mast */}
      <rect x="30" y="20" width="6" height="58" fill="currentColor" />
      <line x1="30" y1="32" x2="36" y2="44" stroke="white" strokeWidth="1.5" />
      <line x1="36" y1="32" x2="30" y2="44" stroke="white" strokeWidth="1.5" />
      <line x1="30" y1="50" x2="36" y2="62" stroke="white" strokeWidth="1.5" />
      <line x1="36" y1="50" x2="30" y2="62" stroke="white" strokeWidth="1.5" />
      {/* jib */}
      <rect x="6" y="18" width="60" height="5" fill="currentColor" />
      {/* counter weight */}
      <rect x="3" y="16" width="7" height="9" rx="1" fill="#FF8A00" />
      {/* top */}
      <path d="M33 8 L48 19 L18 19 Z" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* hook line + load */}
      <line x1="52" y1="23" x2="52" y2="40" stroke="currentColor" strokeWidth="2" />
      <rect x="47" y="40" width="10" height="8" rx="1" fill="#FF8A00" />
      {/* base */}
      <rect x="24" y="78" width="18" height="4" rx="1" fill="currentColor" />
    </svg>
  )
}

function CitySilhouette() {
  return (
    <svg
      className="pointer-events-none absolute bottom-0 left-0 w-full text-white/50"
      height="80"
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0 80V46h40V30h30v16h26V20h34v26h30V36h40v44h44V52h30v28h36V24h40v56h30V42h34v38h40V30h30v50h44V48h30v32h40V28h34v52h40V40h30v40h60V80z"
      />
    </svg>
  )
}
