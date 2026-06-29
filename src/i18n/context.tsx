import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Locale } from '@/i18n/types'
import {
  LOCALE_STORAGE_KEY,
  defaultLocale,
  isLocale,
  localeOptions,
  messages,
} from '@/i18n/config'
import { LanguageContext, type LanguageContextValue } from '@/i18n/useI18n'

/** Resolves the initial locale from storage, then the browser, then default. */
function readInitialLocale(): Locale {
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
    if (isLocale(stored)) return stored
  } catch {
    /* localStorage may be unavailable — ignore */
  }

  const browser = typeof navigator !== 'undefined' ? navigator.language.toLowerCase() : ''
  if (browser.startsWith('uk')) return 'ua'
  if (browser.startsWith('hr')) return 'cr'

  return defaultLocale
}

function htmlLangFor(locale: Locale): string {
  return localeOptions.find((o) => o.code === locale)?.htmlLang ?? locale
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale)

  // Keep <html lang> in sync for accessibility, SEO and correct hyphenation.
  useEffect(() => {
    document.documentElement.lang = htmlLangFor(locale)
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next)
    } catch {
      /* localStorage may be unavailable — ignore */
    }
  }, [])

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, t: messages[locale] }),
    [locale, setLocale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
