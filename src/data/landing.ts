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

/**
 * Language-neutral structure for the landing page.
 *
 * Only data that never changes between languages lives here — icons, accent
 * colors and screenshot base names. All copy (titles, text, alts) comes from
 * the translation files in `@/i18n/messages` and is merged with this metadata
 * by the `useLanding` hook.
 */

export type AccentColor = 'orange' | 'green' | 'red' | 'purple' | 'navy'

/* ------------------------------------------------------------------ */
/* Problem / solution cards                                            */
/* ------------------------------------------------------------------ */

export const problemCardsMeta: { icon: LucideIcon; accent: AccentColor }[] = [
  { icon: MessageSquareDashed, accent: 'red' },
  { icon: FolderOpen, accent: 'orange' },
  { icon: AlertTriangle, accent: 'orange' },
  { icon: UserRound, accent: 'green' },
]

/* ------------------------------------------------------------------ */
/* Screens showcase                                                    */
/* ------------------------------------------------------------------ */

/** `base` maps to /screens/<base>-<locale>.png — see `screenSrc`. */
export const featureScreensMeta: { icon: LucideIcon; base: string }[] = [
  { icon: LayoutGrid, base: 'projects' },
  { icon: Users, base: 'participants' },
  { icon: ClipboardCheck, base: 'works' },
  { icon: BarChart3, base: 'analytics' },
  { icon: ImageIcon, base: 'work-photos' },
  { icon: Info, base: 'project-details' },
]

/** The three phone screens stacked in the hero, by screenshot base name. */
export const heroScreenBases: string[] = [
  'participants',
  'projects',
  'project-details',
]

/* ------------------------------------------------------------------ */
/* Roles                                                               */
/* ------------------------------------------------------------------ */

export const roleCardsMeta: { icon: LucideIcon; accent: AccentColor }[] = [
  { icon: ShieldCheck, accent: 'purple' },
  { icon: HardHat, accent: 'orange' },
  { icon: HardHat, accent: 'green' },
]

/* ------------------------------------------------------------------ */
/* Workflow                                                            */
/* ------------------------------------------------------------------ */

export const workflowStepsMeta: { icon: LucideIcon; accent: AccentColor }[] = [
  { icon: FileText, accent: 'navy' },
  { icon: Users, accent: 'orange' },
  { icon: ClipboardCheck, accent: 'green' },
  { icon: Camera, accent: 'purple' },
]

/* ------------------------------------------------------------------ */
/* Roadmap                                                             */
/* ------------------------------------------------------------------ */

export const roadmapItemsMeta: { icon: LucideIcon; accent: AccentColor }[] = [
  { icon: Rocket, accent: 'navy' },
  { icon: Workflow, accent: 'orange' },
  { icon: Camera, accent: 'green' },
  { icon: BarChart3, accent: 'purple' },
]
