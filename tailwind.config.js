/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
    colors: {
      // Configure your color palette here
      'theme': '#69cbbf',
      'white': '#ffffff',
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
