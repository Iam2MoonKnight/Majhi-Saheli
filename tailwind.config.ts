import type { Config } from 'tailwindcss'

/**
 * MSCT design tokens.
 *
 * NOTE: This project runs Tailwind CSS v4, where the source of truth for the
 * theme lives in `app/globals.css` (the `@theme inline` block). The aliases
 * below mirror those tokens for editor/IntelliSense support and any tooling
 * that still reads the JS config. Keep the two in sync.
 */
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1b3a5c',
          dark: '#14293f',
        },
        coral: {
          DEFAULT: '#e85d75',
          dark: '#d14a62',
        },
        steel: '#2f5a86',
        sky: '#d6e4f0',
        offwhite: '#f8f9fb',
        line: '#e5e9f0',
        ink: '#1a1a1a',
        muted: '#5a6b7d',
        gold: '#e3a63c',
      },
      borderRadius: {
        xl2: '1rem',
      },
      maxWidth: {
        shell: '80rem',
      },
    },
  },
  plugins: [],
}

export default config
