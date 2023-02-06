/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        light_gray: '#D9D9D9',
        gray: '#888888',
        dark_gray: '#292929',
      },
      fontFamily: {
        serifPro: ['Source Serif Pro', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        pop: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        popMenu: 'pop .2s ease-in-out',
      },
    },
  },
  plugins: [],
};
