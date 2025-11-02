/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7f7',
          100: '#e0e6e6',
          500: '#5a8a7a',
          600: '#4a7768',
          700: '#3a5f52',
          900: '#2d4a3f',
        },
        secondary: {
          50: '#faf9f7',
          100: '#f3f1ed',
          500: '#9c8978',
          600: '#8b7969',
          900: '#5a4d42',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
