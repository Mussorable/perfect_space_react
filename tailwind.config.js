/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'orange': '#f16236',
        'dark': '#212529',
        'milk': '#f8f9fa',
        'lemon': '#ffc107',
        'light-lemon': '#ffca2c',
      }
    },
  },
  plugins: [],
}

