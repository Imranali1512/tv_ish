/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(100%) scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0) scale(1)',
          },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%) scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0) scale(1)',
          },
        },
        fadeInZoom: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95) translateY(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) translateY(0)',
          },
        },
        shineSwipe: {
          '0%': {
            left: '-75%',
          },
          '100%': {
            left: '125%',
          },
        },
        floatUp: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        slideInRight: 'slideInRight 0.7s ease-in-out forwards',
        slideInLeft: 'slideInLeft 0.7s ease-in-out forwards',
        fadeInZoom: 'fadeInZoom 1.5s ease-out both',
        shineSwipe: 'shineSwipe 1s ease-in-out forwards',
        pulseSlow: 'pulse 5s infinite',
        bounce: 'bounce 2s infinite',
        floatUp: 'floatUp 8s ease-in-out infinite',
        fadeUp: 'fadeUp 1s ease-out both',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
