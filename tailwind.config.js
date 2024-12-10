/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'orange': '#f84f1c',
        'light-orange': '#ff3715',
        'dark': '#212529',
        'milk': '#f8f9fa',
        'lemon': '#ffc107',
        'light-lemon': '#ffca2c',
      },
      keyframes: {
        moveRight: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(15%)' }
        },
        moveLeft: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-15%)' }
        }
      },
      animation: {
        right: 'moveRight 1s ease-in-out infinite',
        left: 'moveLeft 1s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

