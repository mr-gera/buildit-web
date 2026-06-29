import type { WorkStatus } from '@/features/works/types'

export type WorkStatusBreakdown = Record<WorkStatus, number>

export type ProgressTrendPoint = {
  date: string
  progress: number
}

export type WorkTypeDistribution = {
  type: string
  percentage: number
}

export type CrewPerformance = {
  id: number
  name: string
  completion: number
  completed: number
  total: number
}

export type ProjectAnalytics = {
  project_id: number
  overall_progress: number
  completed_works: number
  under_review: number
  issues: number
  status_breakdown: WorkStatusBreakdown
  progress_trend: ProgressTrendPoint[]
  work_type_distribution: WorkTypeDistribution[]
  crew_performance: CrewPerformance[]
}
