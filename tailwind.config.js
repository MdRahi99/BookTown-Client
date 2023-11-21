/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'trainOne': ['Train One', 'cursive'],
        'wallPoet': ['Wallpoet', 'cursive'],
        'roboto': ['Roboto', 'sans-serif'],
        'playFair': ['Playfair', 'Display'],
      },
    },
  },
  plugins: [require("daisyui")],
}

