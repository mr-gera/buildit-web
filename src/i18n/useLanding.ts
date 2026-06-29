import type { LucideIcon } from 'lucide-react'
import { useMemo } from 'react'
import { useI18n } from '@/i18n/useI18n'
import { screenSrc } from '@/i18n/config'
import type { AccentColor } from '@/data/landing'
import {
  featureScreensMeta,
  heroScreenBases,
  problemCardsMeta,
  roadmapItemsMeta,
  roleCardsMeta,
  workflowStepsMeta,
} from '@/data/landing'

export type ProblemCard = { icon: LucideIcon; accent: AccentColor; title: string; text: string }
export type FeatureScreen = { icon: LucideIcon; title: string; subtitle: string; image: string; alt: string }
export type HeroScreen = { image: string; alt: string }
export type RoleCard = { icon: LucideIcon; accent: AccentColor; title: string; description: string; bullets: string[] }
export type WorkflowStep = { icon: LucideIcon; accent: AccentColor; title: string; text: string }
export type RoadmapItem = { icon: LucideIcon; accent: AccentColor; title: string; text: string; time: string }

export type LandingContent = {
  problemCards: ProblemCard[]
  featureScreens: FeatureScreen[]
  heroScreens: HeroScreen[]
  roleCards: RoleCard[]
  workflowSteps: WorkflowStep[]
  roadmapItems: RoadmapItem[]
}

/**
 * Merges the language-neutral landing structure (icons, accents, screenshot
 * base names) with the active locale's copy and localized screenshot paths.
 * Components consume the ready-to-render arrays and stay free of i18n plumbing.
 */
export function useLanding(): LandingContent {
  const { t, locale } = useI18n()

  return useMemo<LandingContent>(
    () => ({
      problemCards: problemCardsMeta.map((meta, i) => ({
        ...meta,
        ...t.problem.cards[i],
      })),
      featureScreens: featureScreensMeta.map((meta, i) => ({
        icon: meta.icon,
        image: screenSrc(meta.base, locale),
        ...t.screens.items[i],
      })),
      heroScreens: heroScreenBases.map((base, i) => ({
        image: screenSrc(base, locale),
        alt: t.hero.screenAlts[i],
      })),
      roleCards: roleCardsMeta.map((meta, i) => ({
        ...meta,
        ...t.roles.cards[i],
      })),
      workflowSteps: workflowStepsMeta.map((meta, i) => ({
        ...meta,
        ...t.workflow.steps[i],
      })),
      roadmapItems: roadmapItemsMeta.map((meta, i) => ({
        ...meta,
        ...t.roadmap.items[i],
      })),
    }),
    [t, locale],
  )
}
