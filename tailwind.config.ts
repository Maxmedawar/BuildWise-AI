import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#0A1F44'
        },
        gold: {
          500: '#C5A500'
        }
      }
    }
  },
  plugins: []
}
export default config
