import { createContext, useContext } from 'react'
import type { Locale, Messages } from '@/i18n/types'

export type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  /** Translations for the active locale. */
  t: Messages
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useI18n(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useI18n must be used within a LanguageProvider')
  }
  return ctx
}
