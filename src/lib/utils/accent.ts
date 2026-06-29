import type { AccentColor } from '@/data/landing'

/**
 * Maps an accent color token to Tailwind classes for an icon "chip"
 * (soft background + colored icon). Centralised so every section that
 * renders an accented icon stays visually consistent.
 */
export const accentChip: Record<AccentColor, string> = {
  orange: 'bg-orange-soft text-orange',
  green: 'bg-green/10 text-green',
  red: 'bg-red/10 text-red',
  purple: 'bg-purple/10 text-purple',
  navy: 'bg-blue-soft text-navy-soft',
}
