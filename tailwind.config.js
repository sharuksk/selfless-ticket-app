/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'addRect': "url('./assets/addRect.png')",
      },
    },
  },
  plugins: [],
}



