import type { LucideIcon } from 'lucide-react'
import {
  MessageSquareDashed,
  FolderOpen,
  AlertTriangle,
  UserRound,
  HardHat,
  ShieldCheck,
  FileText,
  Users,
  ClipboardCheck,
  Camera,
  Rocket,
  Workflow,
  BarChart3,
  LayoutGrid,
  Image as ImageIcon,
  Info,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export type NavItem = {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Roles', href: '#roles' },
  { label: 'Screens', href: '#screens' },
  { label: 'Roadmap', href: '#roadmap' },
]

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const heroFeatures: string[] = [
  'Real-time progress and status tracking',
  'Photo evidence for every work',
]

/* ------------------------------------------------------------------ */
/* Problem / solution cards                                            */
/* ------------------------------------------------------------------ */

export type AccentColor = 'orange' | 'green' | 'red' | 'purple' | 'navy'

export type ProblemCard = {
  icon: LucideIcon
  accent: AccentColor
  title: string
  text: string
}

export const problemCards: ProblemCard[] = [
  {
    icon: MessageSquareDashed,
    accent: 'red',
    title: 'Scattered communication',
    text: 'Project updates are lost in texts, chats, calls and notebooks.',
  },
  {
    icon: FolderOpen,
    accent: 'orange',
    title: 'Lost photos & documents',
    text: 'One place to store photos, records and work history.',
  },
  {
    icon: AlertTriangle,
    accent: 'orange',
    title: 'Unclear status',
    text: 'It’s hard to know what’s done, what’s next and what’s delayed.',
  },
  {
    icon: UserRound,
    accent: 'green',
    title: 'Low accountability',
    text: 'Without clear ownership and proof, mistakes happen.',
  },
]

/* ------------------------------------------------------------------ */
/* Screens showcase                                                    */
/* ------------------------------------------------------------------ */

export type FeatureScreen = {
  icon: LucideIcon
  title: string
  subtitle: string
  /** Image placed under /public/screens. May be absent — UI falls back. */
  image: string
  alt: string
}

export const featureScreens: FeatureScreen[] = [
  {
    icon: LayoutGrid,
    title: 'Projects overview',
    subtitle: 'All projects at a glance',
    image: '/screens/projects-en.png',
    alt: 'eBud projects overview screen showing a list of construction projects with progress',
  },
  {
    icon: Users,
    title: 'Team & roles',
    subtitle: 'Everyone in the right role',
    image: '/screens/participants-en.png',
    alt: 'eBud participants screen showing team members with their roles and presence',
  },
  {
    icon: ClipboardCheck,
    title: 'Works',
    subtitle: 'Plan, track and update work',
    image: '/screens/works-en.png',
    alt: 'eBud works screen showing tasks and their statuses',
  },
  {
    icon: BarChart3,
    title: 'Analytics dashboard',
    subtitle: 'Key metrics at a glance',
    image: '/screens/analytics-en.png',
    alt: 'eBud analytics dashboard with progress trend and work status breakdown',
  },
  {
    icon: ImageIcon,
    title: 'Photo proof',
    subtitle: 'Before, after and in-between',
    image: '/screens/work-photos-en.png',
    alt: 'eBud work photos screen showing before and after photo evidence',
  },
  {
    icon: Info,
    title: 'Project details',
    subtitle: 'Everything in context',
    image: '/screens/project-details-en.png',
    alt: 'eBud project details screen showing progress, structure and recent works',
  },
]

/* The three phone screens stacked in the hero. */
export const heroScreens: { image: string; alt: string }[] = [
  {
    image: '/screens/participants-en.png',
    alt: 'eBud participants screen preview',
  },
  {
    image: '/screens/projects-en.png',
    alt: 'eBud projects overview screen preview',
  },
  {
    image: '/screens/project-details-en.png',
    alt: 'eBud project details screen preview',
  },
]

/* ------------------------------------------------------------------ */
/* Roles                                                               */
/* ------------------------------------------------------------------ */

export type RoleCard = {
  icon: LucideIcon
  accent: AccentColor
  title: string
  description: string
  bullets: string[]
}

export const roleCards: RoleCard[] = [
  {
    icon: ShieldCheck,
    accent: 'purple',
    title: 'Owner',
    description: 'See overall progress, key metrics, issues and timelines.',
    bullets: [
      'Real-time overview',
      'Budget & timeline visibility',
      'Make better decisions',
    ],
  },
  {
    icon: HardHat,
    accent: 'orange',
    title: 'Foreman',
    description:
      'Manage daily tasks, track status and keep the team on track.',
    bullets: ['Create & assign tasks', 'Monitor progress', 'Keep the project on track'],
  },
  {
    icon: HardHat,
    accent: 'green',
    title: 'Worker',
    description: 'See your tasks, update status, and deliver work on time.',
    bullets: ['View daily tasks', 'Upload photo proof', 'Stay in sync with the team'],
  },
]

/* ------------------------------------------------------------------ */
/* Workflow                                                            */
/* ------------------------------------------------------------------ */

export type WorkflowStep = {
  icon: LucideIcon
  accent: AccentColor
  title: string
  text: string
}

export const workflowSteps: WorkflowStep[] = [
  {
    icon: FileText,
    accent: 'navy',
    title: 'Create project',
    text: 'Add project details, structure and timeline.',
  },
  {
    icon: Users,
    accent: 'orange',
    title: 'Assign team',
    text: 'Invite team members and set their roles.',
  },
  {
    icon: ClipboardCheck,
    accent: 'green',
    title: 'Track work',
    text: 'Create tasks, update status and track progress.',
  },
  {
    icon: Camera,
    accent: 'purple',
    title: 'Review photo proof',
    text: 'Capture photo evidence and close the loop.',
  },
]

/* ------------------------------------------------------------------ */
/* Roadmap                                                             */
/* ------------------------------------------------------------------ */

export type RoadmapItem = {
  icon: LucideIcon
  accent: AccentColor
  title: string
  text: string
  time: string
}

export const roadmapItems: RoadmapItem[] = [
  {
    icon: Rocket,
    accent: 'navy',
    title: 'MVP in progress',
    text: 'Core project, task and team management to get you started.',
    time: 'Q3 2026',
  },
  {
    icon: Workflow,
    accent: 'orange',
    title: 'Role-based workflows',
    text: 'Smarter role permissions and tailored experiences for each user.',
    time: 'Q4 2026',
  },
  {
    icon: Camera,
    accent: 'green',
    title: 'Photo reporting',
    text: 'Advanced photo capture, annotations and proof tracking.',
    time: 'Q4 2026',
  },
  {
    icon: BarChart3,
    accent: 'purple',
    title: 'Analytics module',
    text: 'Deeper insights, reports and performance dashboards.',
    time: 'Later',
  },
]

/* ------------------------------------------------------------------ */
/* Development banner chips                                            */
/* ------------------------------------------------------------------ */

export const developmentChips: string[] = [
  'Thoughtfully designed',
  'Built with industry feedback',
  'Product preview',
]
