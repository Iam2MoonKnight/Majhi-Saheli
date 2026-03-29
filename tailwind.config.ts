import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0F9FB',
          100: '#E1F3F7',
          200: '#B3E5FC',
          300: '#81D4FA',
          400: '#4FC3F7',
          500: '#1B8A8A',
          600: '#00838F',
          700: '#006064',
          800: '#004D4D',
          900: '#003838',
        },
        accent: {
          50: '#FEF5F5',
          100: '#FCEBEB',
          200: '#F8D7D7',
          300: '#F3C3C3',
          400: '#E88C8C',
          500: '#D64045',
          600: '#C73C41',
          700: '#B83236',
          800: '#A0282B',
          900: '#881E20',
        },
        gold: {
          50: '#FFFBF0',
          100: '#FFF7E1',
          200: '#FFEFCC',
          300: '#FFE5B4',
          400: '#FFD700',
          500: '#F2C94C',
          600: '#E6B800',
          700: '#D4A000',
          800: '#B88900',
          900: '#997200',
        },
      },
    },
  },
  plugins: [],
}

export default config
