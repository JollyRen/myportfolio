module.exports = {
  purge: ['./src/**/*.vue'],
  content: ['./src/**/*.{html, js}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}
