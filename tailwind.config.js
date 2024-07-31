/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        regular:("Regular"),

      },
      backgroundOpacity: {
        '10': '0.1',
        '20': '0.2',
        '95': '0.95',
       },
      backgroundImage: {
        'addRect': "url('./assets/addRect.png')",

      },
    },
  },
  plugins: [],
}



