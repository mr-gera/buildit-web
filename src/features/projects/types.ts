export type ProjectStatus = 'active' | 'archived'

export type ProjectType = 'apartment' | 'floor' | 'building' | 'house'

export type Project = {
  id: number
  name: string
  type: ProjectType
  status: ProjectStatus
  address?: string
  cover_url?: string | null
  works_count?: number
  participants_count?: number
  progress?: number
  created_at?: string
  updated_at?: string
}

/**
 * StructureNode — the hierarchical structure of a project
 * (building -> floor -> apartment -> room).
 */
export type StructureNode = {
  id: number
  project_id: number
  parent_id: number | null
  name: string
  type: 'building' | 'floor' | 'apartment' | 'room'
  children?: StructureNode[]
}
