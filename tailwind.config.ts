import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#061B4E',
        'navy-soft': '#0A2A66',
        orange: {
          DEFAULT: '#FF8A00',
          soft: '#FFF1DF',
        },
        green: '#22C55E',
        red: '#EF4444',
        purple: '#8B5CF6',
        'blue-soft': '#EFF6FF',
        'border-soft': '#E5EAF3',
        'text-muted': '#64748B',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 1px 3px rgba(6, 27, 78, 0.04), 0 8px 24px rgba(6, 27, 78, 0.06)',
        'card-hover': '0 4px 12px rgba(6, 27, 78, 0.08), 0 16px 40px rgba(6, 27, 78, 0.10)',
        phone: '0 20px 50px rgba(6, 27, 78, 0.18)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}

export default config
