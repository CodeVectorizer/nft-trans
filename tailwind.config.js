module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      spacing: {
        '1.25': '0.3125rem', // 5px
        '2.5': '0.625rem', // 10px
        '7.5': '1.875rem', // 30px
        '15': '3.75rem', // 60px
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
