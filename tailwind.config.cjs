/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      darkBlue: 'hsl(209, 23%, 22%)',
      bgDarkBlue: 'hsl(207, 26%, 17%)',
      fgDarkBlue: 'hsl(200, 15%, 8%)',
      darkGray: 'hsl(0, 0%, 52%)',
      lightGray: 'hsl(0, 0%, 70%)',
      veryLightGray: 'hsl(0, 0%, 98%)',
      white: 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      sans: ['Nunito Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
