import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown, Globe } from 'lucide-react'
import { useI18n } from '@/i18n/useI18n'
import { localeOptions } from '@/i18n/config'
import { cn } from '@/lib/utils/cn'

/**
 * Compact language selector. Renders a button showing the current language
 * code and a dropdown of the available locales. Switching updates the UI copy
 * and the localized screenshots (shared via the LanguageProvider).
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n()
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const current = localeOptions.find((o) => o.code === locale) ?? localeOptions[0]

  // Close on outside click or Escape.
  useEffect(() => {
    if (!open) return

    function onPointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t.common.languageAria}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 rounded-lg border border-border-soft bg-white px-2.5 py-1.5 text-sm font-semibold text-navy transition-colors hover:border-orange/40 hover:text-orange"
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        {current.short}
        <ChevronDown
          className={cn('h-4 w-4 transition-transform', open && 'rotate-180')}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t.common.languageAria}
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-border-soft bg-white py-1 shadow-card"
        >
          {localeOptions.map((option) => {
            const active = option.code === locale
            return (
              <li key={option.code} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => {
                    setLocale(option.code)
                    setOpen(false)
                  }}
                  className={cn(
                    'flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm transition-colors hover:bg-slate-50',
                    active ? 'font-semibold text-navy' : 'text-navy/80',
                  )}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-6 text-xs font-semibold text-text-muted">
                      {option.short}
                    </span>
                    {option.label}
                  </span>
                  {active && <Check className="h-4 w-4 shrink-0 text-orange" aria-hidden="true" />}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
