/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "100": "30rem"
      },
      width: {
        "100": "32rem"
      },
      colors: {
        primary: '#7856ff'
      }
    },
  },
  plugins: [],
};
