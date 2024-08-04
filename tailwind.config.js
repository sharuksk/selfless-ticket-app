/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        regular:("Regular"),

      },
      colors: {
        'atlantis': '#3FDBCE',
        'cardbg': "#FFFFFF91",
      },
      backgroundOpacity: ['active'],
      backgroundOpacity: {
        '10': '0.1',
        '20': '0.2',
        '50': '0.5',
        '95': '0.95',
       },
      backgroundImage: {
        'addRect': "linear-gradient(180deg, #808080, #FFFFFF)",
        
      },
    },
  },
  plugins: [],
}



