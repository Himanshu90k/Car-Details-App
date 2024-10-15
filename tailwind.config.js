/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        customBlue: '#182C83',
        customGreen: '#0AB057',
        customGrey: '#4D4D4D',
        customRed: '#E03F3F',
        cardBlue: '#3B8CCF',
      },
      fontSize: {
        'xxs': '10px',
        '3.25xl': '2rem',
      },
      width: {
        22: '5.5rem',
        38: '9.5rem',
        60: '15rem',
        84: '22rem',
        86: '22.25rem'
      },
      height: {
        11.25: '46px',
      },
      borderWidth: {
        3: '3px',
      },
      borderRadius: {
        '4-xl': '1.25rem',
        45: '45px',
      },
      boxShadow: {
        cardShadow: '4px 3px 8.1px 0px rgba(0, 0, 0, 0.26)',
      },
      spacing: {
        '87': '87%',
      },
    },
  },
  plugins: [],
}

