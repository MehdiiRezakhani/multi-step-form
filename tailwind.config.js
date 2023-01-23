/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        colors: {
          //main color
          'N900' : '#091E42',
          'N800' : '#172B4D',
          'N500' : '#42526E',
          'N200' : '#6B778C',
          'N100' : '#7A869A',
          'N40' : '#DFE1E6',
          'N20' : ' rgba(9, 30, 66, 0.04)',
          'N10' : '#FAFBFC',
          'Y400': '#FF991F',
          'B400' : '#0052CC',
        },
        boxShadow: {
          'shadowA': '0px 2px 15px rgba(0, 0, 0, 0.25)',
          'shadowB': '0 20px 50px -10px rgba(58, 71, 80, 0.15)',
        },
    },
  },
  plugins: [require("@tailwindcss/forms")], 
};
