/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayscale: {
          900: "#0F1114",
          800: "#363D47",
          700: "#5D6673",
          600: "#8D94A0",
          500: "#BDC5D0",
          400: "#D6DBE2",
          300: "#EAECF0",
          200: "#F6F7F9",
          100: "#FEFEFE",
        },
        "main-blue": {
          blueblack: "#0A2838",
          900: "#147796",
          800: "#1B9FC8",
          700: "#22C7FA",
          500: "#93E6FF",
          300: "#D8F5FF",
          100: "#E9F9FF",
        },
        "main-green": {
          900: "#0E694D",
          800: "#11AB7B",
          700: "#1FEAAB",
          500: "#84FBD6",
          300: "#CAFFEF",
          100: "#E9FDF7",
        },
        redscale: {
          700: "#F83650",
          500: "#FB7D8E",
          300: "#FFDBE0",
        },
        "pastel-pink": {
          700: "#FFA5FF",
          500: "#FFDBFF",
          300: "#FFF1FF",
        },
        "pastel-yellow": {
          500: "#FFF280",
          300: "#FFFCE6",
        },
        gradient: {
          "b700-g700": "#22C7FA",
          "v200-b700": "#1FE4A9",
        },
      },
      backgroundImage: {
        "b700-g700": "linear-gradient(135deg, #22C7FA 0%, #1FEAAB 100%)",
        "y300-b700": "linear-gradient(135deg, #FFFCE6 0%, #22C7FA 100%)",
      },
    },
  },
  plugins: [],
};
