module.exports = {
  purge: ['./src/**/*.vue'],
  darkMode: 'class',
  content: ['./src/**/*.{html, js}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}
