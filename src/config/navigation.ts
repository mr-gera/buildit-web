/**
 * Central navigation config.
 *
 * `landingNav` powers the header anchor links. `footerNav` powers the footer.
 * Labels are not stored here — each entry carries a `key` that the Header and
 * Footer resolve against the active locale (see `@/i18n/messages`).
 * `appNav` is a blueprint for the future dashboard sidebar — not rendered yet.
 */
import type { Messages } from '@/i18n/types'

export type NavKey = keyof Messages['nav']
export type FooterKey = keyof Messages['footer']['links']

export const landingNav: { key: NavKey; href: string }[] = [
  { key: 'features', href: '#features' },
  { key: 'roles', href: '#roles' },
  { key: 'screens', href: '#screens' },
  { key: 'roadmap', href: '#roadmap' },
]

export const footerNav: { key: FooterKey; href: string }[] = [
  { key: 'product', href: '#top' },
  { key: 'features', href: '#features' },
  { key: 'status', href: '#development' },
]

/** Future dashboard navigation (not implemented yet). */
export const appNav = [
  { label: 'Projects', path: '/app/projects' },
  { label: 'Members', path: '/app/projects/:projectId/members' },
  { label: 'Works', path: '/app/projects/:projectId/works' },
  { label: 'Analytics', path: '/app/projects/:projectId/analytics' },
] as const
