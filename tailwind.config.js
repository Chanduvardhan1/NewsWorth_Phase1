/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // extend: {},
    extend: {
      fontFamily:{
        Poppins:["Poppins","sans-serif"]
      },
      clipPath: {
        'custom': 'polygon(0% 0%, 80% 0, 81% 10%, 95% 18%, 81% 28%, 81% 100%, 0 100%)',
      },
      // keyframes: {
      //   fadeIn: {
      //     '0%': { opacity: '0' },
      //     '100%': { opacity: '1' },
      //   },
      //   'slide-in-right': {
      //     '0%': { transform: 'translateX(100%)', opacity: '0' },
      //     '100%': { transform: 'translateX(0)', opacity: '1' },
      //   },
      // },
      // animation: {
      //   fadeIn: 'fadeIn 3s ease-out forwards',
      //   'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
      // },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-left': 'slide-left 0.8s ease-out forwards',
        'slide-right': 'slide-right 0.8s ease-out forwards',
      },
    },
  },
    

  plugins: [],
}