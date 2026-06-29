/**
 * Safely reads and exposes Vite environment variables.
 * All values are read from `import.meta.env` and given sensible fallbacks
 * so the app never crashes if an env var is missing.
 */

type AppEnv = 'development' | 'staging' | 'production'

function readString(value: unknown, fallback: string): string {
  return typeof value === 'string' && value.length > 0 ? value : fallback
}

export const env = {
  appName: readString(import.meta.env.VITE_APP_NAME, 'eBud'),
  apiBaseUrl: readString(
    import.meta.env.VITE_API_BASE_URL,
    'https://stage.build-it-app.uk/api',
  ),
  appEnv: readString(import.meta.env.VITE_APP_ENV, 'development') as AppEnv,
} as const

export const isProduction = env.appEnv === 'production'
