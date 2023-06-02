/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main_color: "rgb(79, 70, 229)",
        hover_color: "rgb(67, 55, 201)",
      },
    },
  },
  plugins: [],
};
