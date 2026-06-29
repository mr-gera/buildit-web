import { apiClient } from '@/lib/api/apiClient'
import { endpoints } from '@/lib/api/endpoints'
import type { Project, StructureNode } from '@/features/projects/types'

/**
 * Projects API for the future dashboard. Not used by the landing page yet.
 */
export async function getProjects(): Promise<Project[]> {
  const { data } = await apiClient.get<Project[]>(endpoints.projects.list)
  return data
}

export async function getProject(projectId: number | string): Promise<Project> {
  const { data } = await apiClient.get<Project>(
    endpoints.projects.detail(projectId),
  )
  return data
}

export async function getProjectStructure(
  projectId: number | string,
): Promise<StructureNode[]> {
  const { data } = await apiClient.get<StructureNode[]>(
    endpoints.projects.structure(projectId),
  )
  return data
}
