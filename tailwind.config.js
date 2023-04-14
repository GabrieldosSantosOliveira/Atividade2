/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        app: 'url(/background.png)',
      },
      colors: {
        background: '#000',
        'text-color': '#FFF',
        button: '#8257E5',
        border: '#29292E',
        'menu-mobile': '#A8A8B3',
        'color-menu-mobile': '#E1E1E6',
      },
      fontFamily: {
        manrope: "'Manrope', sans-serif;",
      },
    },
  },
  plugins: [],
};
