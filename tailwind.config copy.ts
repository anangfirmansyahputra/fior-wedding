import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        font: "#2B2B2B",
        background: "#FBF8F1",
        bold: "#232B35",
        "dark-accent": "#D1C7BE",
        "light-accent": "#D9BDBA",
        "peach-whip": "#DDBFB9",
        "rose-tan": "#D19C97",
        "sea-salt": "#F1E6DF",
        thunderstrom: "#5b585a",
      },
      fontFamily: {
        carmorant: ["Carmorant", "sans"],
        semplicita: ["Semplicita", "sans"],
        amiri: ["Amiri", "sans"],
      },
    },
  },
  plugins: [],
};
export default config;
