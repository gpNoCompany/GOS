/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        sidebar: '18.75rem'
      },
      maxWidth: {
        sidebar: '18.75rem'
      },
      fontSize: {
        main: ['0.9375rem', {
          lineHeight: '1.25rem'
        }],
      },
      colors: {
        blue: '#005FF9',
        green: '#60CA86',
        red: '#DC5050',
        purple: '#AE6AD7',
        gray: {
          100: '#1B1B1C',
          200: '#202021',
          300: '#2A2A2B',
          400: '#303030',
          500: '#484A4D',
          600: '#919399',
          700: '#C3C5CB',
        }
      },
      boxShadow: {
        main: '0px 7px 25px 0px rgba(0, 0, 0, 0.1)',
        secondary: '0px 14px 35px 0px rgba(0, 0, 0, 0.8)',
        long: '',
      }
    },
  },
  plugins: [],
}