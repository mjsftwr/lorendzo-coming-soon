import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'xl': '-27px -24px 0px 2px rgba(220, 229, 225, 1)',
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
} satisfies Config

