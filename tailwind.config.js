/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfaf7',
          100: '#f7f0e6',
          200: '#ede0cc',
        },
        rose: {
          50: '#fff5f5',
          100: '#ffe0e0',
          200: '#ffc5c5',
          700: '#9e2a2b',
          800: '#7f1d1d',
          900: '#5c1515',
        },
        warm: {
          900: '#2c1a10',
          800: '#3a2318',
          700: '#4a3020',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
};
