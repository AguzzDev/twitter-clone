const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        '9.5/12': '80%',
      },
      spacing: {
        'midXL': '16.5rem',
        'midLG': '6.35rem',
        'midMD': '4.5rem',
      }
    },
    fontFamily: {

    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
      black: colors.black,
      white: colors.white,
      'body': '#15202B',
      'bodylight': '#192734',
      'blue1': '#1A91DA',
      'blue2': '#253341',
      'blue3': '#1e76ce',
      'bluelight1': '#1D2934',
      'gray1': '#96A3A3',
      'graylight': '#F7F9F9',
      'bordes': '#38444D'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
