/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'primary': '#405D72',
      'secondary': '#758694',
      'accent': '#F7E7DC',
      'light': '#FFF8F3'
    },
  },
  },
  plugins: [],
}