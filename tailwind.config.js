/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7A1F1F",
        gold: "#C9A24D",
        ivory: "#FFF8F1",
        charcoal: "#1F2937"
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"]
      }
    }
  },
  plugins: []
}
