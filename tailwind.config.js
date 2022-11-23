/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        stone: {
          900: '#0e0e0e'
        },
        neutral: {
          600: '#5a5757',
          800: '#252525',
          900: '#0D0D0D'
        },
        rose: {
          500: '#ff5b50'
        }
      }
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    }
  },
  plugins: []
}
