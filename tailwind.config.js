const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        large: [
          "8px 5px 4px 0px #00000040"
        ]
      }
    },
  },
  plugins: [],
}
