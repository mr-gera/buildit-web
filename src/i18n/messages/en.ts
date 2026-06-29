import type { Messages } from '@/i18n/types'

export const en: Messages = {
  nav: {
    features: 'Features',
    roles: 'Roles',
    screens: 'Screens',
    roadmap: 'Roadmap',
  },
  common: {
    inDevelopment: 'In Development',
    homeAria: 'eBud home',
    primaryNavAria: 'Primary',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageAria: 'Change language',
  },
  hero: {
    badge: 'COMING SOON',
    titleLead: 'Construction progress control from task to ',
    titleHighlight: 'photo proof',
    description:
      'eBud helps owners, foremen and workers manage renovation and construction projects, track statuses, assign tasks, and keep photo evidence in one place.',
    features: [
      'Real-time progress and status tracking',
      'Photo evidence for every work',
    ],
    note: 'is currently in development. We’re building the future of construction management.',
    screenAlts: [
      'eBud participants screen preview',
      'eBud projects overview screen preview',
      'eBud project details screen preview',
    ],
  },
  problem: {
    heading: 'eBud for the realities of construction',
    cards: [
      {
        title: 'Scattered communication',
        text: 'Project updates are lost in texts, chats, calls and notebooks.',
      },
      {
        title: 'Lost photos & documents',
        text: 'One place to store photos, records and work history.',
      },
      {
        title: 'Unclear status',
        text: 'It’s hard to know what’s done, what’s next and what’s delayed.',
      },
      {
        title: 'Low accountability',
        text: 'Without clear ownership and proof, mistakes happen.',
      },
    ],
  },
  screens: {
    heading: 'A complete workflow in one app',
    items: [
      {
        title: 'Projects overview',
        subtitle: 'All projects at a glance',
        alt: 'eBud projects overview screen showing a list of construction projects with progress',
      },
      {
        title: 'Team & roles',
        subtitle: 'Everyone in the right role',
        alt: 'eBud participants screen showing team members with their roles and presence',
      },
      {
        title: 'Works',
        subtitle: 'Plan, track and update work',
        alt: 'eBud works screen showing tasks and their statuses',
      },
      {
        title: 'Analytics dashboard',
        subtitle: 'Key metrics at a glance',
        alt: 'eBud analytics dashboard with progress trend and work status breakdown',
      },
      {
        title: 'Photo proof',
        subtitle: 'Before, after and in-between',
        alt: 'eBud work photos screen showing before and after photo evidence',
      },
      {
        title: 'Project details',
        subtitle: 'Everything in context',
        alt: 'eBud project details screen showing progress, structure and recent works',
      },
    ],
  },
  roles: {
    heading: 'Built for every role on site',
    cards: [
      {
        title: 'Owner',
        description: 'See overall progress, key metrics, issues and timelines.',
        bullets: [
          'Real-time overview',
          'Budget & timeline visibility',
          'Make better decisions',
        ],
      },
      {
        title: 'Foreman',
        description:
          'Manage daily tasks, track status and keep the team on track.',
        bullets: [
          'Create & assign tasks',
          'Monitor progress',
          'Keep the project on track',
        ],
      },
      {
        title: 'Worker',
        description: 'See your tasks, update status, and deliver work on time.',
        bullets: [
          'View daily tasks',
          'Upload photo proof',
          'Stay in sync with the team',
        ],
      },
    ],
  },
  workflow: {
    heading: 'How eBud works',
    steps: [
      {
        title: 'Create project',
        text: 'Add project details, structure and timeline.',
      },
      {
        title: 'Assign team',
        text: 'Invite team members and set their roles.',
      },
      {
        title: 'Track work',
        text: 'Create tasks, update status and track progress.',
      },
      {
        title: 'Review photo proof',
        text: 'Capture photo evidence and close the loop.',
      },
    ],
  },
  roadmap: {
    heading: 'Product roadmap',
    eyebrow: 'MVP in progress',
    footnote: 'The roadmap is informational and may change as the product evolves.',
    items: [
      {
        title: 'MVP in progress',
        text: 'Core project, task and team management to get you started.',
        time: 'Q3 2026',
      },
      {
        title: 'Role-based workflows',
        text: 'Smarter role permissions and tailored experiences for each user.',
        time: 'Q4 2026',
      },
      {
        title: 'Photo reporting',
        text: 'Advanced photo capture, annotations and proof tracking.',
        time: 'Q4 2026',
      },
      {
        title: 'Analytics module',
        text: 'Deeper insights, reports and performance dashboards.',
        time: 'Later',
      },
    ],
  },
  development: {
    title: 'eBud is in active development.',
    description:
      'We’re building a better way to manage construction projects from the ground up.',
    chips: [
      'Thoughtfully designed',
      'Built with industry feedback',
      'Product preview',
    ],
    footnote: 'Landing page concept / product preview',
  },
  footer: {
    rights: '© 2026 eBud. All rights reserved.',
    links: {
      product: 'Product',
      features: 'Features',
      status: 'Status',
    },
  },
  notFound: {
    code: '404',
    title: 'Page not found',
    description:
      'The page you’re looking for doesn’t exist yet. eBud is still in development — more is on the way.',
    back: 'Back to home',
  },
}
