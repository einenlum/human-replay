/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'cursive': ['Licorice', 'cursive'],
        'display': ['Staatliches', 'sans-serif'],
      }
    },
  },
  plugins: [],
}