/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroud: "#22262F",
        green: "#077E71",
        grey: "#8B8C91",
        inputBG: '#2E323C'
      },
      fontFamily: {
        syncopate: ["syncopate", "Sans-serif"],
        Ralweay_bold: ["Raleway-Bold", "Sans-serif"],
        Ralweay_medium: ["Raleway-Medium", "Sans-serif"],
        Ralweay_thin: ["Raleway-Thin", "Sans-serif"],
      },
      backgroundImage: {
        bgHero: "url('/herobg.png')",
        bgDashboard: "url('/dashboard.png')",
        repobg: "url('/repobg.png')",
        followersbg: "url('/followersbg.png')",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
