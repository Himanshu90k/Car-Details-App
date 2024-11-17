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
        darkGrey: '#474646',
        customRed: '#E03F3F',
        cardBlue: '#3B8CCF',
        yearRed: 'rgba(224, 63, 63, 0.90)',
        customGrey:'#4D4D4D',
        customLightBlue: '#5BAFF5',
        customLightGreen: '#1AD170',
        customLightBlack: '#1E1E1E',
        skyBlue: '#D4ECFF',
      },
      fontSize: {
        'xxs': '10px',
        '3.25xl': '2rem',
      },
      width: {
        2.5: '0.625rem',
        9: '2.25rem',
        11.5: '2.875rem',
        18:'4.5rem',
        22: '5.5rem',
        23: '5.75rem',
        27: '6.75rem',
        33: '8.75rem',
        38: '9.5rem',
        45: '11.625rem',
        57: '14.75rem',
        60: '15rem',
        78: '19.375rem',
        81: '21.25rem',
        84: '22rem',
        86: '22.25rem',
        135: '38.25rem',
        160: '46.75rem',
      },
      height: {
        2.5: '0.625rem',
        5.5: '15px',
        11.25: '2.875rem',
        76: '18.75rem',
        98: '24.5rem',
        120: '35rem',
        125: '36.25rem',
        135: '38.25rem',
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
        workLineShadow: '-4px 4px 4.2px -2px rgba(0, 0, 0, 0.32)',
        formBoxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      gap: {
        8.5: '2.125rem',
        10.5: '2.625rem',
        18: '4.375rem',
      },
      margin: {
        0.1: '1px',
      },
      backgroundImage: {
        'custom-blue-gradient': 'linear-gradient(180deg, #9FD3FF 0%, #81BDEF 22.86%, #72B2E7 41.94%, #2B7DC0 100%)',
      },
    },
  },
  plugins: [],
}

