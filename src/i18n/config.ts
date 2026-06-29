import type { Locale, LocaleOption, Messages } from '@/i18n/types'
import { locales } from '@/i18n/types'
import { en } from '@/i18n/messages/en'
import { ua } from '@/i18n/messages/ua'
import { cr } from '@/i18n/messages/cr'

export const defaultLocale: Locale = 'en'

/** localStorage key used to remember the visitor's language choice. */
export const LOCALE_STORAGE_KEY = 'ebud.locale'

export const messages: Record<Locale, Messages> = { en, ua, cr }

/** Order here is the order shown in the language switcher menu. */
export const localeOptions: LocaleOption[] = [
  { code: 'en', label: 'English', short: 'EN', htmlLang: 'en' },
  { code: 'ua', label: 'Українська', short: 'UA', htmlLang: 'uk' },
  { code: 'cr', label: 'Hrvatski', short: 'HR', htmlLang: 'hr' },
]

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value)
}

/**
 * Builds the public path to a localized screenshot, e.g.
 * `screenSrc('projects', 'ua')` → `/screens/projects-ua.png`.
 * `PhoneMockup` falls back to a placeholder if the file is missing.
 */
export function screenSrc(base: string, locale: Locale): string {
  return `/screens/${base}-${locale}.png`
}
