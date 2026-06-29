/**
 * Roles map to the Laravel API domain. Public registration is disabled:
 *   - Admin creates Owner
 *   - Owner creates Brigadier or Worker inside a project
 *   - Brigadier can create Worker inside a project
 *   - Worker cannot create users
 */
export type UserRole = 'owner' | 'brigadier' | 'worker'

export type User = {
  id: number
  name: string
  email: string
  role: UserRole
  avatar_url?: string | null
  created_at?: string
  updated_at?: string
}

export type LoginPayload = {
  email: string
  password: string
}

export type LoginResponse = {
  token: string
  user: User
}
