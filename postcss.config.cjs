module.exports = {
  plugins: {
    'postcss-nesting': {}, // 👈 viktig at den er før tailwindcss
    tailwindcss: {},
    autoprefixer: {},
  },
}
