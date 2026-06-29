export type ProjectRole = 'owner' | 'brigadier' | 'worker'

export type ProjectMember = {
  id: number
  project_id: number
  user_id: number
  role: ProjectRole
  name?: string
  specialty?: string
  avatar_url?: string | null
  presence?: 'online' | 'on_site' | 'offline'
  phone?: string
}
