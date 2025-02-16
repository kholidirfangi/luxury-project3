/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arima: ['"Arima", serif'],
        cormorant: ['"Cormorant", serif'],
      },
    },
  },
  plugins: [],
};
