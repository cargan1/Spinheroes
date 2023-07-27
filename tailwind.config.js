/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        darkpurple: "#272653",
        lightpurple: "#6B66FF",
        violet: "#100F31",
        grey: "#f9f9f9",
        poppurple: "#1E1D4B",
        formbg: "#2F2E68",
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
    },
  },
  plugins: [],
};
