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
        first: '#C3C5CB',
        secondary: '#60CA86',
        thirdly: '#919399',
        gray: '#303030'
      },
      backgroundColor: {
        header: '#2A2A2B',
        body: '#202021'
      },
      boxShadow: {
        main: '0px 7px 25px 0px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}