/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        gray: "rgb(242, 242, 242)",
        softblue: "rgb(15, 69, 204)",
        info: "rgb(15, 69, 204, 0.05)",
        active: "rgb(15, 69, 204, 0.25)",
        hover: "rgb(15, 69, 204, 0.15)",
        grey: "#f9f9f9",
      },
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
      },
    },
  },
  plugins: [],
};
