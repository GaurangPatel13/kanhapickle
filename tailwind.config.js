/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        scaleUp: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        'bounce-x': {
          '0%': { transform: 'translateX(100%)' },
          '50%': { transform: 'translateX(-10px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'bounce-x': 'bounce-x 0.5s ease-out',
        fadeIn: 'fadeIn 1s ease-out',
        scaleUp: 'scaleUp 0.7s ease-out',
      },
      colors: {
        electricBlue: '#3B82F6',
        sunsetOrange: '#FF6B35',
        aquaMint: '#2DD4BF',
        goldenYellow: '#FACC15',
        softWhite: '#F9FAFB',
        charcoalGrey: '#374151',
        vividCoral: '#FB7185',
        limeGreen: '#84CC16',
      },
      fontFamily: {
        cinzelBlack: ['Cinzel Decorative Black', 'serif'],
        Helvatica: ['Helvetica', 'serif'],
        Incite: ['Incite Aplx', 'serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}