/**
 * Central navigation config.
 *
 * `landingNav` powers the header anchor links. `footerNav` powers the footer.
 * `appNav` is a blueprint for the future dashboard sidebar — not rendered yet.
 */

export type AnchorLink = {
  label: string
  href: string
}

export const landingNav: AnchorLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Roles', href: '#roles' },
  { label: 'Screens', href: '#screens' },
  { label: 'Roadmap', href: '#roadmap' },
]

export const footerNav: AnchorLink[] = [
  { label: 'Product', href: '#top' },
  { label: 'Features', href: '#features' },
  { label: 'Status', href: '#development' },
]

/** Future dashboard navigation (not implemented yet). */
export const appNav = [
  { label: 'Projects', path: '/app/projects' },
  { label: 'Members', path: '/app/projects/:projectId/members' },
  { label: 'Works', path: '/app/projects/:projectId/works' },
  { label: 'Analytics', path: '/app/projects/:projectId/analytics' },
] as const
