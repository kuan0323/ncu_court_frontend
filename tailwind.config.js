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
      'black':'#000',
      'gray-200':'#edf2f7',
      'gray-400':'#cbd5e0',
      'gray-700':'#4a5568',
      'gray-800':'#2d3748',
      'transparent':'transparent',
      'gray-900':'#1a202c',
      'blue-100':'#ebf8ff',
      'blue-600':'#3182ce',
      'blue-700':'#2b6cb0',
      'blue-800':'#2c5282',
      'red-100':'#fff5f5',
      'red-600':'#e53e3e',
      'red-700':'#c53030',
      'green-300':'#9ae6b4',
      'green-600':'#38a169',
      'green-700':'#2f855a',
      'green-800':'#276749'
    }
    
  },
  plugins: [],
}
