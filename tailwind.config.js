/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        darkWhite: 'hsla(0, 0%, 90%, 1)',
        contactColor: 'hsla(0, 0%, 96%, 1)',
        darkBlack: 'hsla(0, 0%, 26%, 1)',
        lightBlack: 'hsla(0, 0%, 33%, 1)',
        softYellow: 'hsla(47, 100%, 52%, 1)',
        textColor: 'hsla(0, 0%, 73%, 1)',
      },
      fontFamily: {
        sans: ['Bitter', 'sans-serif'],
        serif: ['Inter', 'serif'],
        mono: ['Poppins', 'mono'],
      },
    },
  },
  plugins: [],
}

