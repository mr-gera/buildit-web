/**
 * i18n type definitions.
 *
 * Locale codes intentionally match the screenshot file suffixes used in
 * `public/screens` (`-en`, `-ua`, `-cr`) so a single code drives both the UI
 * language and which localized screenshots are shown.
 */

export const locales = ['en', 'ua', 'cr'] as const

export type Locale = (typeof locales)[number]

export type LocaleOption = {
  code: Locale
  /** Native language name shown in the switcher menu. */
  label: string
  /** Two-letter code shown on the compact switcher button. */
  short: string
  /** Standard BCP-47 tag written to <html lang> for accessibility/SEO. */
  htmlLang: string
}

/**
 * Shape of every translation file. `en.ts`, `ua.ts` and `cr.ts` must all
 * satisfy this type, so adding a new string forces every locale to provide it.
 */
export type Messages = {
  nav: {
    features: string
    roles: string
    screens: string
    roadmap: string
  }
  common: {
    inDevelopment: string
    homeAria: string
    primaryNavAria: string
    openMenu: string
    closeMenu: string
    languageAria: string
  }
  hero: {
    badge: string
    titleLead: string
    titleHighlight: string
    description: string
    features: [string, string]
    /** Rendered after the bold “eBud” brand word in the hero note box. */
    note: string
    screenAlts: [string, string, string]
  }
  problem: {
    heading: string
    cards: { title: string; text: string }[]
  }
  screens: {
    heading: string
    items: { title: string; subtitle: string; alt: string }[]
  }
  roles: {
    heading: string
    cards: { title: string; description: string; bullets: string[] }[]
  }
  workflow: {
    heading: string
    steps: { title: string; text: string }[]
  }
  roadmap: {
    heading: string
    eyebrow: string
    footnote: string
    items: { title: string; text: string; time: string }[]
  }
  development: {
    title: string
    description: string
    chips: [string, string, string]
    footnote: string
  }
  footer: {
    rights: string
    links: { product: string; features: string; status: string }
  }
  notFound: {
    code: string
    title: string
    description: string
    back: string
  }
}
