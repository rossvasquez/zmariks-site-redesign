/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      lobster: ["Lobster", "cursive"],
      slab: ["Roboto Slab", "serif"],
    },
    extend: {},
  },
  plugins: [],
}
