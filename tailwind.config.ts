import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A0F2C',
          mid: '#111936',
          light: '#1a2444',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C97A',
          dark: '#9E7E35',
        },
        ivory: {
          DEFAULT: '#F5F1E8',
          dim: '#DDD8CB',
        },
        teal: {
          brand: '#1A6E73',
          light: '#22959D',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#DDD8CB',
            a: { color: '#C9A84C' },
            h1: { color: '#F5F1E8' },
            h2: { color: '#F5F1E8' },
            h3: { color: '#F5F1E8' },
            strong: { color: '#F5F1E8' },
          }
        }
      }
    },
  },
  plugins: [],
}
export default config
