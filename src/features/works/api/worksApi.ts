import { apiClient } from '@/lib/api/apiClient'
import { endpoints } from '@/lib/api/endpoints'
import type { Work, WorkPhoto } from '@/features/works/types'

/**
 * Works API for the future dashboard. Not used by the landing page yet.
 */
export async function getProjectWorks(
  projectId: number | string,
): Promise<Work[]> {
  const { data } = await apiClient.get<Work[]>(
    endpoints.projects.works(projectId),
  )
  return data
}

export async function getWorkPhotos(
  projectId: number | string,
  workId: number | string,
): Promise<WorkPhoto[]> {
  const { data } = await apiClient.get<WorkPhoto[]>(
    endpoints.works.photos(projectId, workId),
  )
  return data
}
