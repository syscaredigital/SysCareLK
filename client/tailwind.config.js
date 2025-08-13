/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#103d5d',
        secondary: '#245684',
        text: '#00000',
        light: '#F9FAFB',
        

      },
      maxWidth: {
        'screen-2xl': '1440px',
      },
      width: {
        'screen': '100vw',
      },

       animation: {
        'moveGradient': 'moveGradient 5s linear infinite',
      },
       keyframes: {
        moveGradient: {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '100% 50%' },
        }
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      backgroundPosition: {
        'pos-0': '0% 50%',
        'pos-100': '100% 50%',
      }
    },
  },
  plugins: [],
}