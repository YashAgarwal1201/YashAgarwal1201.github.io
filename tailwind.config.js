/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      dark: {
        color1: '#0a0a0a',
        color2: '#171717',
        color3: '#404040',
        color4: '#a3a3a3',
        color5: '#fafafa'
        // color1: colors.stone
      },
      light: {
        color1: '#fafafa',
        color2: '#a3a3a3',
        color3: '#404040',
        color4: '#171717',
        color5: '#0a0a0a' 
      }
    },
    extend: {},
  },
  plugins: [],
}

