/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      DM: ['DM Sans','sans-serif']
    },
    colors: {
      primary: '#edf2f8',
      secondary: '#313bac',
      customBlack: '#030303',
      customLightGray: '#e4e4e4',
      customBrown: '#46364a'
    },
    extend: {},
  },
  plugins: [],
}

