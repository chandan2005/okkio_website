/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
    extend:{
      colors: {
        'primary-background': '#F8F5F0',
        'dark-text': '#1A1A1A',
        'footer-background': '#F8F5F0',
        'footer-text-light': '#000000',
        'candy-red': '#D21404',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // You can specify themes here, or remove this line to use all themes
  },
};