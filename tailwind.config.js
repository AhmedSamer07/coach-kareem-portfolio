/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0F172A',
          dark: '#020617',
          ice: '#38BDF8',
          accent: '#0EA5E9',
        }
      }
    },
  },
  plugins: [],
}