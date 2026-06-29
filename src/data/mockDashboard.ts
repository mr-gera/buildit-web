import type { Project } from '@/features/projects/types'
import type { ProjectMember } from '@/features/members/types'
import type { Work } from '@/features/works/types'
import type { ProjectAnalytics } from '@/features/analytics/types'

/**
 * Realistic mock data for the future dashboard.
 *
 * Used today only as fallback content for the CSS phone mockups when a real
 * screenshot is unavailable. Later this same shape can seed the dashboard
 * during development before the API is wired up.
 */

export const mockProjects: Project[] = [
  {
    id: 1,
    name: 'River Park Residential',
    type: 'building',
    status: 'active',
    address: 'Dnipro, Naberezhna Peremohy St, 44',
    works_count: 128,
    participants_count: 24,
    progress: 68,
  },
  {
    id: 2,
    name: 'Office on Saksahanskoho',
    type: 'building',
    status: 'active',
    address: 'Kyiv, 37 Saksahanskoho St.',
    works_count: 86,
    participants_count: 18,
    progress: 42,
  },
  {
    id: 3,
    name: 'Cottage Bucha',
    type: 'house',
    status: 'active',
    address: 'Bucha, 12 Lisova St.',
    works_count: 54,
    participants_count: 12,
    progress: 25,
  },
  {
    id: 4,
    name: 'Manhattan Complex',
    type: 'building',
    status: 'active',
    address: 'Kyiv, 11 Beresteiskyi Ave.',
    works_count: 210,
    participants_count: 31,
    progress: 75,
  },
]

export const mockMembers: ProjectMember[] = [
  {
    id: 1,
    project_id: 1,
    user_id: 1,
    role: 'owner',
    name: 'Oleksandr Shevchenko',
    specialty: 'Project Owner',
    presence: 'online',
  },
  {
    id: 2,
    project_id: 1,
    user_id: 2,
    role: 'brigadier',
    name: 'Ihor Kovalchuk',
    specialty: 'Concrete foreman',
    presence: 'on_site',
  },
  {
    id: 3,
    project_id: 1,
    user_id: 3,
    role: 'brigadier',
    name: 'Maksym Bondarenko',
    specialty: 'Masonry foreman',
    presence: 'on_site',
  },
  {
    id: 4,
    project_id: 1,
    user_id: 4,
    role: 'worker',
    name: 'Roman Tkachenko',
    specialty: 'Mason',
    presence: 'on_site',
  },
  {
    id: 5,
    project_id: 1,
    user_id: 5,
    role: 'worker',
    name: 'Vitalii Doroshenko',
    specialty: 'Rebar worker',
    presence: 'online',
  },
  {
    id: 6,
    project_id: 1,
    user_id: 6,
    role: 'worker',
    name: 'Serhii Melnyk',
    specialty: 'Electrician',
    presence: 'offline',
  },
]

export const mockWorks: Work[] = [
  {
    id: 1,
    project_id: 1,
    structure_node_id: 10,
    assigned_worker_id: 4,
    created_by: 2,
    title: 'Site preparation',
    type: 'Earthworks',
    status: 'in_progress',
    estimate_days: 5,
  },
  {
    id: 2,
    project_id: 1,
    structure_node_id: 11,
    assigned_worker_id: 4,
    created_by: 2,
    title: 'Foundation',
    type: 'Concrete works',
    status: 'in_progress',
    estimate_days: 12,
  },
  {
    id: 3,
    project_id: 1,
    structure_node_id: 12,
    assigned_worker_id: 5,
    created_by: 2,
    title: 'Brickwork',
    type: 'Masonry',
    status: 'paused',
    estimate_days: 20,
  },
  {
    id: 4,
    project_id: 1,
    structure_node_id: 13,
    assigned_worker_id: 6,
    created_by: 3,
    title: 'Plastering',
    type: 'Finishing works',
    status: 'done',
    estimate_days: 8,
  },
  {
    id: 5,
    project_id: 1,
    structure_node_id: 14,
    assigned_worker_id: 6,
    created_by: 3,
    title: 'Electrical works',
    type: 'Engineering systems',
    status: 'waiting_for_approval',
    estimate_days: 10,
  },
]

export const mockAnalytics: ProjectAnalytics = {
  project_id: 1,
  overall_progress: 68,
  completed_works: 82,
  under_review: 14,
  issues: 6,
  status_breakdown: {
    done: 82,
    in_progress: 14,
    waiting_for_approval: 14,
    rejected: 6,
    created: 0,
    paused: 0,
  },
  progress_trend: [
    { date: 'May 23', progress: 54 },
    { date: 'May 24', progress: 57 },
    { date: 'May 25', progress: 60 },
    { date: 'May 26', progress: 62 },
    { date: 'May 27', progress: 64 },
    { date: 'May 28', progress: 66 },
    { date: 'May 29', progress: 68 },
  ],
  work_type_distribution: [
    { type: 'Earthworks', percentage: 75 },
    { type: 'Concrete works', percentage: 60 },
    { type: 'Masonry', percentage: 45 },
    { type: 'Engineering systems', percentage: 30 },
    { type: 'Finishing works', percentage: 20 },
  ],
  crew_performance: [
    { id: 1, name: 'Concrete crew', completion: 78, completed: 32, total: 41 },
    { id: 2, name: 'Masonry crew', completion: 65, completed: 24, total: 37 },
    { id: 3, name: 'Engineering crew', completion: 52, completed: 11, total: 21 },
    { id: 4, name: 'Finishing crew', completion: 28, completed: 7, total: 25 },
  ],
}

/** Human-readable labels for work statuses. */
export const workStatusLabels: Record<Work['status'], string> = {
  created: 'Created',
  in_progress: 'In Progress',
  waiting_for_approval: 'Under Review',
  rejected: 'Rejected',
  done: 'Completed',
  paused: 'Paused',
}

/** Human-readable labels for project member roles. */
export const roleLabels = {
  owner: 'Owner',
  brigadier: 'Foreman',
  worker: 'Worker',
} as const
