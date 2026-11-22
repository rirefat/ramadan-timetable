import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/domains/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6a74c9",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#1e1b4b",
          950: "#060e32",
        },
        ramadan: {
          dark: "#060e32",
          card: "#ffffff",
          cardDark: "#0c1544",
          accent: "#6a74c9",
          gold: "#f59e0b",
          goldLight: "#fef3c7",
          emerald: "#10b981",
        },
      },
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
        arabic: ["Amiri", "Traditional Arabic", "serif"],
      },
      backgroundImage: {
        "ramadan-gradient": "linear-gradient(135deg, #00569a 0%, #060e32 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
