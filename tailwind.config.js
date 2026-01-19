/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./context/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#faf7f2",
        gold: "#d4af37",
        charcoal: "#1f1f1f",
        royal: {
          bg: "#1b1b2f",
          card: "#162447",
          accent: "#e43f5a",
          text: "#f1f1f1",
        },
      },
    },
  },
  plugins: [],
}
