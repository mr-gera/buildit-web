import { apiClient } from '@/lib/api/apiClient'
import { endpoints } from '@/lib/api/endpoints'
import type { ProjectMember } from '@/features/members/types'

/**
 * Members API for the future dashboard. Not used by the landing page yet.
 */
export async function getProjectMembers(
  projectId: number | string,
): Promise<ProjectMember[]> {
  const { data } = await apiClient.get<ProjectMember[]>(
    endpoints.projects.members(projectId),
  )
  return data
}
