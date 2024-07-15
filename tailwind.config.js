/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'Darkblue':'#00406F',
       'Darkerblue' :'#022945',
       'gray':'#F4FAFF',
       'slategray':'#8FA3C7',
       'Shadesblue' : '#EBF5FF',
        
      },
    },
  },
  plugins: [],
}
