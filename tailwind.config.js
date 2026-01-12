/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'geist': ['Geist', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
      colors: {
        'primary': '#32404f',
        'secondary': 'rgba(50, 64, 79, 0.58)',
        'accent': 'rgba(50, 64, 79, 0.75)',
      },
    },
  },
  plugins: [],
}
