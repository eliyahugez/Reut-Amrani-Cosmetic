/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'comic': ['Heebo', 'system-ui', 'sans-serif'],

        rounded: ["Arial Rounded MT Bold", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
