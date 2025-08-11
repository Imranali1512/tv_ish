/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(100%) scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0) scale(1)',
          },
        },
        'slide-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%) scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0) scale(1)',
          },
        },
      },
      animation: {
        'slide-in-right': 'slide-in-right 0.7s ease-in-out forwards',
        'slide-in-left': 'slide-in-left 0.7s ease-in-out forwards',
        'slide-in-right': 'slideInRight 0.7s ease-in-out',
        'slide-in-left': 'slideInLeft 0.7s ease-in',
      },
      
    },
  },
  plugins: [],
};
