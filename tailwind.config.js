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
    screens: {
      'sm': '400px',
      // => @media (min-width: 640px) { ... }

      'md': '720px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      spacing: {
        '10p': '10%',
      },
      backgroundImage: {
        'ziggly': "url('https://d12xoj7p9moygp.cloudfront.net/images/home/bg-share.svg')",
       }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
