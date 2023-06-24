/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3399cc',
        light: "#dee2e6",
        circle: "#B0EF8F",
        check:"#009045",
        shade:"#EDF1F7",
        card:"#F0F5FC"


        
        
        
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

