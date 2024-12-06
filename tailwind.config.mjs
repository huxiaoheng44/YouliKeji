/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#fbbf24',
        accent: '#15803d'
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}