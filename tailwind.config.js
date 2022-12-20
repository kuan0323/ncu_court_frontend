/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        'theme': '#69cbbf',
        'white': '#ffffff',
      },
    },
    
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl': '3.5rem',
      'full': '9999px',
      'large': '12px',
    }

  },
  plugins: [
    require("flowbite/plugin")
  ],
}
