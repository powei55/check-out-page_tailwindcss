/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}",'./index.html'],
  
  theme: {
    fontFamily: {
      display: ["'Montserrat', sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}