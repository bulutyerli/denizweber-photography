/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        hand: ["var(--font-whisper)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: true,
      defaultTheme: "light",
      layout: {},
      themes: {
        light: {
          layout: {},
          colors: {
            background: "#FFFFFF",
            foreground: "#18181B",
            secondary: "#e56b6f",
            primary: "#18181B",
          },
        },
        dark: {
          layout: {},
          colors: {
            background: "#18181B",
            foreground: "#E4E4E7",
            secondary: "#e56b6f",
            primary: "#E4E4E7",
          },
        },
      },
    }),
  ],
};
