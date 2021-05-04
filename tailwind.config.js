const colors = require('tailwindcss/colors')
module.exports = {
  node:'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        ourback: '#06202A',
        
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    extend: {
      screens:{
        "3xl":"2000px",
      },
    },
  },
  variants: {
    extend: {
      padding:['last'],
      textColor:['active'],
      animation:['group-hover'],
      fontWeight:['group-hover'],
      
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
