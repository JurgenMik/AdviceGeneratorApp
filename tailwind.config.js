const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Manrope', ...defaultTheme.fontFamily.sans],
    },
    letterSpacing: {
      widest: '4px',
      wide: '2px',
    }
  },
  plugins: [],
}