/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        '9.5/12': '80%'
      },
      spacing: {
        midXL: '16.5rem',
        midLG: '6.35rem',
        midMD: '4.5rem'
      },
      fontFamily: {},
      colors: {
        body: '#15202B',
        bodylight: '#1e2732',
        bluelight1: '#1D2934',
        gray1: '#96A3A3',
        graylight: '#F7F9F9',
        blue1: '#1A91DA',
        blue2: '#253341',
        blue3: '#1e76ce',
        bordes: '#38444D'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
