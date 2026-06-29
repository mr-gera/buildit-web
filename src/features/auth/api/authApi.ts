import { apiClient, setStoredToken } from '@/lib/api/apiClient'
import { endpoints } from '@/lib/api/endpoints'
import type { LoginPayload, LoginResponse, User } from '@/features/auth/types'

/**
 * Auth API for the future dashboard. Not used by the landing page yet.
 */
export async function login(payload: LoginPayload): Promise<LoginResponse> {
  const { data } = await apiClient.post<LoginResponse>(
    endpoints.auth.login,
    payload,
  )
  setStoredToken(data.token)
  return data
}

export async function logout(): Promise<void> {
  await apiClient.post(endpoints.auth.logout)
  setStoredToken(null)
}

export async function getCurrentUser(): Promise<User> {
  const { data } = await apiClient.get<User>(endpoints.auth.me)
  return data
}
