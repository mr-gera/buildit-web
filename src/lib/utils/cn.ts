import { clsx, type ClassValue } from 'clsx'

/**
 * Conditionally join Tailwind/clsx class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs)
}
