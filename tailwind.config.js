/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      spacing:
      {
        'mobile': '375px',
        'desktop': '1440px'
      },
      colors:
      {
        'nutmeg': 'hsl(14, 45%, 36%)',
        'dark-raspberry': 'hsl(332, 51%, 32%)',
        'swhite': 'hsl(0, 0%, 100%)',
        'rosewhite': 'hsl(330, 100%, 98%)',
        'eggshell': 'hsl(30, 54%, 90%)',
        'lightgrey': 'hsl(30, 18%, 87%)',
        'wengebrown': 'hsl(30, 10%, 34%)',
        'darkcharcoal': 'hsl(24, 5%, 18%)',
      },
      fontFamily:
      {
        YoungSerif : 'Young Serif',
        Outfit: 'Outfit',
      }
    },
  },
  plugins: [],
}

