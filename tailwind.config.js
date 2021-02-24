const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      lime: colors.lime,
      gray: colors.gray,
      emerald: colors.emerald
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
