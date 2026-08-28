/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#d1f2eb',     // The soft mint/white mix
          primary: '#50c878',   // The bright emerald green
          dark: '#0b6e4f',      // The rich forest green
          darkest: '#003526'    // The deep, almost-black background green
        }
      }
    },
  },
  plugins: [],
}