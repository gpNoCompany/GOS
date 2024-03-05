/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-black': '#1D1D1D',
        'light-gray': '#5F5F5F',
        'dark-gray': '#2B2B2B',
        'btn-bg-green': '#60CA86',
        'btn-bg-black': '#222222',
        'btn-border-black': '#343434',
        'input-border-gray': 'rgba(177, 150, 255, 0.5)',
        'input-hover': '#383838',
      },
    },
  },
  plugins: [],
}
