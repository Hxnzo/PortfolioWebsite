/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      'sm': '475px',

      'smd': '550px',

      'md': '768px',

      'lg': '1055px',

      'xl': '1470px',

      '2xl': '1710px'
    },

    extend: {},
  },
  plugins: [],
}
