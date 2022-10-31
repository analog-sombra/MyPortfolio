/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ['./**/*.{html,js}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        'mdy': "0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1)",
      }
    },
  },
  plugins: [],
}
