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
        yearRed: 'rgba(224, 63, 63, 0.90)',
        customGrey:'#4D4D4D',
        customLightBlue: '#5BAFF5',
        customLightBlack: '#1E1E1E',
      },
      fontSize: {
        'xxs': '10px',
        '3.25xl': '2rem',
      },
      width: {
        9: '2.25rem',
        22: '5.5rem',
        23: '5.75rem',
        38: '9.5rem',
        60: '15rem',
        78: '19.375rem',
        84: '22rem',
        86: '22.25rem'
      },
      height: {
        11.25: '2.875rem',
        76: '18.75rem',
        98: '24.5rem',
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
        yearShadow: '-5px 5px 4.5px 0px rgba(0, 0, 0, 0.31)',
        workBoxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.16)',
      },
      spacing: {
        '6.5': '25px',
      },
      gap: {
        8.5: '2.125rem',
        10.5: '2.625rem',
        18: '4.375rem',
      },
    },
  },
  plugins: [],
}

