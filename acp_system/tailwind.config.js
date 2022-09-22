/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme=> ({
        'pattern': "url('/public/moroccan-flower-dark.png')",
      }),
    
    screens:{
      'sm' : '500px',
      // => @media (min-width: 570px) { ... }

    }
    },
  },
  plugins: [],
};
