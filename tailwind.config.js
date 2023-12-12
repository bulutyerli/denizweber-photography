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
      fontFamily: {
        sans: ["var(--font-inter)"],
        whisper: ["var(--font-whisper)"],
        lora: ["var(--font-lora)"],
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
            secondary: "#e56b6f",
            primary: "#18181B",
          },
        },
        dark: {
          layout: {},
          colors: {
            background: "#151519",
            secondary: "#e56b6f",
            primary: "#E4E4E7",
          },
        },
      },
    }),
  ],
};
