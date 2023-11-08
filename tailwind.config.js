/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainBlue': '#6FB8D5',
        'buttonHover' : '#1D438A',
        'boardColor' : '#2438F0',
        'boardHover': '#2424f9',
        'postItNormal' : '#24F0A2',
        'postItHighlight' : '#FFD966',
        'blueCard' : '#BDE3FF',
        'buttonLog': '#0D3380'
      },
    },
  },
  plugins: [],
}

