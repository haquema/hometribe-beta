const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "112": "28rem",
        "74": "18.5rem"
      },
      width: {
        "100": "25",
        "112": "28rem"
      },
      colors: {
        primary: '#7856ff'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
