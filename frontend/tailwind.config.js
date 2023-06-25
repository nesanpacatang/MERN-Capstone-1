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
        "gray-light": "#dee2e6",
        light: "#ffffff",
        circle: "#B0EF8F",
        check:"#009045",
        shade:"#EDF1F7",
        card:"#F0F5FC",
        button: "#B21B00"


        
        
        
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

