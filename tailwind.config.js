/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        imfell: ['"IM Fell English"', 'serif'], 
      },
    },
  },
  plugins: [],
};