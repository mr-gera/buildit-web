export type WorkStatus =
  | 'created'
  | 'in_progress'
  | 'waiting_for_approval'
  | 'rejected'
  | 'done'
  | 'paused'

/**
 * Work lifecycle:
 *   created -> in_progress -> waiting_for_approval -> done
 *   created -> in_progress -> waiting_for_approval -> rejected -> in_progress
 *   created / in_progress / rejected -> paused
 */
export type Work = {
  id: number
  project_id: number
  structure_node_id: number
  assigned_worker_id: number
  created_by: number
  title: string
  type: string
  status: WorkStatus
  estimate_days?: number
  reject_comment?: string | null
  created_at?: string
  updated_at?: string
}

export type WorkType = {
  id: number
  name: string
  default_estimate_days?: number
}

/** A status-change / audit event on a Work. */
export type WorkEvent = {
  id: number
  work_id: number
  actor_id: number
  from_status: WorkStatus | null
  to_status: WorkStatus
  comment?: string | null
  created_at?: string
}

export type WorkPhoto = {
  id: number
  work_id: number
  url: string
  phase: 'before' | 'after'
  uploaded_by: number
  created_at?: string
}
