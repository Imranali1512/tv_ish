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

        // New added keyframes
        fadeInZoom: {
          '0%': { opacity: '0', transform: 'scale(0.95) translateY(40px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        floatUp: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-in-right': 'slide-in-right 0.7s ease-in-out forwards',
        'slide-in-left': 'slide-in-left 0.7s ease-in-out forwards',
        
        // Added new animations
        fadeInZoom: 'fadeInZoom 1.5s ease-out both',
        shine: 'shine 2s linear infinite',
        'pulse-slow': 'pulse 5s infinite',
        bounce: 'bounce 2s infinite',
        floatUp: 'floatUp 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
