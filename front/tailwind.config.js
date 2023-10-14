/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#45C4E9",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
