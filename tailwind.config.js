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
      },
    },
  },
  plugins: [require("daisyui")],
}

