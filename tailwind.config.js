/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'backgroud': '#22262F',
        'green': '#077E71'
      },
      fontFamily:{
        syncopate: ['syncopate', 'Sans-serif'],
      },
      backgroundImage:{
        bgHero: "url('/herobg.png')"
      }
      
    },
  },
  plugins: [],
}