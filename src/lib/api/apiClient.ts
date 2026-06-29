import axios, { type AxiosInstance, type InternalAxiosRequestConfig } from 'axios'
import { env } from '@/config/env'

/**
 * Shared Axios instance for the future eBud web dashboard.
 *
 * NOTE: This client is intentionally NOT used by the landing page. It is
 * prepared so dashboard features (auth, projects, works, members, analytics)
 * can be added later without reworking the networking layer.
 *
 * The backend is a Laravel API using Sanctum bearer-token authentication.
 */

const TOKEN_STORAGE_KEY = 'ebud.auth.token'

export function getStoredToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_STORAGE_KEY)
  } catch {
    return null
  }
}

export function setStoredToken(token: string | null): void {
  try {
    if (token) {
      localStorage.setItem(TOKEN_STORAGE_KEY, token)
    } else {
      localStorage.removeItem(TOKEN_STORAGE_KEY)
    }
  } catch {
    /* localStorage may be unavailable (SSR/private mode) — ignore */
  }
}

export const apiClient: AxiosInstance = axios.create({
  baseURL: env.apiBaseUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

// Request interceptor — attach the Sanctum bearer token when present.
apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getStoredToken()
  if (token) {
    config.headers.set('Authorization', `Bearer ${token}`)
  }
  return config
})

// Response interceptor — placeholder for global 401 handling.
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      // Future: clear token and redirect to /login.
      setStoredToken(null)
    }
    return Promise.reject(error)
  },
)
