/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blue: "#0328EE",
      white: "#FFFFFF",
      bg: "#010725",
      "dark-blue": "#010D50",
      green: "#88B702",
      gray: "rgba(255, 255, 255, .1)",
      "green-bg": "#050605",
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
