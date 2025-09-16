import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f5f7ff',
          100: '#e9edff',
          200: '#cfd8ff',
          300: '#a6b6ff',
          400: '#7d93ff',
          500: '#546fff',
          600: '#3b54e6',
          700: '#2d41b4',
          800: '#23338a',
          900: '#1e2b6e',
        },
      },
      borderRadius: {
        xl: '0.8rem',
        '2xl': '1.2rem',
      },
      boxShadow: {
        soft: '0 6px 20px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
} satisfies Config;
