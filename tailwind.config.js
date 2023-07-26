/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        darkpurple: "#272653",
        lightpurple: "#6B66FF",
        violet: "#100F31",
        grey: "#f9f9f9",
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
    },
  },
  plugins: [],
};
