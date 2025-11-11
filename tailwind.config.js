/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        sacramento: {
          50: '#f0f7f5',
          100: '#d9ede6',
          200: '#b3dbcd',
          300: '#8dc9b4',
          400: '#67b79b',
          500: '#41a582',
          600: '#348468',
          700: '#27634e',
          800: '#1a4234',
          900: '#043927',
        },
      },
    },
  },
  plugins: [],
}

