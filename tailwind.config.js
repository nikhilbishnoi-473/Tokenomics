/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#0A4740",
        yellowText: '#FBA11D',
        lightBlue: '#23AAAC',
        orangeText: '#D45B07',
        redText: '#FB5352',
        greenText: '#8EC627',
        roadmapBg: '#09655A'
      },
      fontFamily: {
        chewy: ["Chewy", "sans-serif"]
      },
    },
  },
  plugins: [],
}

