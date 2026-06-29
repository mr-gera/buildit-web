/**
 * Central registry of API endpoint paths (relative to VITE_API_BASE_URL).
 *
 * Mirrors the Laravel API domain so the future dashboard can consume them.
 * Public registration is disabled by design — there is no `register` endpoint.
 */
export const endpoints = {
  auth: {
    login: '/login',
    logout: '/logout',
    me: '/me',
  },
  projects: {
    list: '/projects',
    detail: (projectId: number | string) => `/projects/${projectId}`,
    members: (projectId: number | string) => `/projects/${projectId}/members`,
    works: (projectId: number | string) => `/projects/${projectId}/works`,
    structure: (projectId: number | string) =>
      `/projects/${projectId}/structure`,
    analytics: (projectId: number | string) =>
      `/projects/${projectId}/analytics`,
  },
  works: {
    detail: (workId: number | string) => `/works/${workId}`,
    events: (workId: number | string) => `/works/${workId}/events`,
    photos: (projectId: number | string, workId: number | string) =>
      `/projects/${projectId}/works/${workId}/photos`,
  },
} as const
