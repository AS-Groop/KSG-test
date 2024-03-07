/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  whitelist: ['bg-white', 'bg-transparent', 'opacity-0', 'opacity-100', 'transition-all'],
  variants: {
    extend: {
      display: ["group-hover"]
    },
  },
  plugins: [],
}

