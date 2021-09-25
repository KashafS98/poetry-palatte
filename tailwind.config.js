const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      dark: '#2A1C4F',
      primary: '#E8F524',
      green: '#175941',
      red: '#951F1B',
      white: colors.white,
    },
    fontFamily: {
      sans: ['Monsterrat', 'sans-serif'],
      serif: ['Libre Baskerville', 'serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
