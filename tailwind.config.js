/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      minHeight: {
        "real-screen": "calc(var(--vh) * 100)",
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)", "sans-serif"],
        creato800: ["var(--font-creato-800)", "sans-serif"],
        creato700: ["var(--font-creato-700)", "sans-serif"],
        creato500: ["var(--font-creato-500)", "sans-serif"],
        creato400: ["var(--font-creato-400)", "sans-serif"],
      },
      fontSize: {
        h1: ["32px", { lineHeight: "135%", fontWeight: "700" }],
        h2: ["28px", { lineHeight: "135%", fontWeight: "700" }],
        h3: ["26px", { lineHeight: "135%", fontWeight: "700" }],
        t1: ["24px", { lineHeight: "135%", fontWeight: "600" }],
        t2: ["22px", { lineHeight: "135%", fontWeight: "600" }],
        t3: ["20px", { lineHeight: "135%", fontWeight: "600" }],
        t4: ["18px", { lineHeight: "135%", fontWeight: "600" }],
        b1M: ["18px", { lineHeight: "150%", fontWeight: "500" }],
        b1R: ["18px", { lineHeight: "150%", fontWeight: "400" }],
        b2M: ["16px", { lineHeight: "150%", fontWeight: "500" }],
        b2R: ["16px", { lineHeight: "150%", fontWeight: "400" }],
        b3M: ["14px", { lineHeight: "150%", fontWeight: "500" }],
        b3R: ["14px", { lineHeight: "150%", fontWeight: "400" }],
        b4M: ["12px", { lineHeight: "150%", fontWeight: "500" }],
        b4R: ["12px", { lineHeight: "150%", fontWeight: "400" }],
        button1: ["18px", { lineHeight: "145%", fontWeight: "500" }],
        button2: ["16px", { lineHeight: "145%", fontWeight: "500" }],
        caption: ["12px", { lineHeight: "145%", fontWeight: "400" }],
      },
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
        blue: {
          blueblack: "#0A2838",
          900: "#147796",
          800: "#1B9FC8",
          700: "#22C7FA",
          500: "#93E6FF",
          300: "#D8F5FF",
          100: "#E9F9FF",
        },
        green: {
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
        pink: {
          700: "#FFA5FF",
          500: "#FFDBFF",
          300: "#FFF1FF",
        },
        yellow: {
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
        "b500-y300": "linear-gradient(180deg, #93E6FF 0%, #FEFEFE 49%, #FFFCE6 100%)",
        main: "url('/assets/images/background.webp')",
        "background-default": "url('/assets/images/background2.webp')",
        "background-line": "url('/assets/images/backgroundLine.webp')",
      },
      keyframes: {
        "toast-pop-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "toast-pop-out": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.9)", opacity: "0" },
        },
      },
      animation: {
        "toast-pop-in": "toast-pop-in 0.5s ease-out",
        "toast-pop-out": "toast-pop-out 0.3s ease-in",
      },
      boxShadow: {
        bnb: "0px 0px 50px 0px rgba(152, 167, 172, 0.10)",
      },
    },
  },
  plugins: [],
};
