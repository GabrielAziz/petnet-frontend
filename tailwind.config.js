/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        blueNetcao: '#1e3c70',
        yellowNetcao: '#fac060',
        black: '#000000',
      },
    },
  },
  plugins: [],
}
