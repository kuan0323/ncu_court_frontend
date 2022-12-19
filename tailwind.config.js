/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'background': '#69cbbf',
      'white': '#ffffff',
      'gray-200':'#edf2f7',
      'gray-800':'#2d3748',
      'gray-900':'#1a202c'
    }
    
  },
  plugins: [],
}
