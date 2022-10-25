/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
      },
      colors: {
        'slate-primary': '#576077',
        'slate-transparent': '#455f8b9e',
        'white-primary': '#E1E9F4',
        'blue-sky': '#A3BCE3',
        'blue-primary': '#21375B',
      },
      screens: {
        'sm-450': '450px',
      }
    },
  },
  plugins: [],
}
