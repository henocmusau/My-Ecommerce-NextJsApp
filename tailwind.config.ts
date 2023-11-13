import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1e293b',
        'secondary': '#64748b',
        'primaryDark': '#e2e8f0',
        'secondaryDark': '#cbd5e1',
        'super': '#4338ca'
      },
      backgroundColor: {
        'primary': '#f0f9ff',
        'secondary': '#fff',
        'primaryDark': '#25273c',
        'secondaryDark': '#181824'
      },
      maxWidth: {
        'app': '72rem',
      },
      boxShadow: {
        'top': '0 -4px 6px 1px rgb(0 0 0 / 0.1), 0 -2px 4px 1px rgb(0 0 0 / 0.1)',
      }
    },
  },
  plugins: [],
}
export default config
