/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bgDark: "#22223b",
        bgDark2: "#4a4e69",
      },
    },
  },
  plugins: [],
};
