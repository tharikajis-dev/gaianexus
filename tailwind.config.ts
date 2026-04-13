import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: "#__next",
  theme: {
    extend: {
      colors: {
        forest: {
          50:  "#EBF2EC",
          100: "#D2E6D8",
          200: "#A5CCAF",
          300: "#77B388",
          400: "#4E8A72",
          500: "#1E5B43",
          600: "#165038",
          700: "#123828",
          800: "#0D2A1E",
          900: "#081C14",
        },
        earth: {
          50:  "#FAF5EE",
          100: "#F0E4CE",
          200: "#DECA9E",
          300: "#C8A96E",
          400: "#B08844",
          500: "#8B5E3C",
          600: "#6E4A2F",
          700: "#533724",
          800: "#3A271A",
          900: "#221710",
        },
        sky: {
          500: "#195B8A",
          600: "#134870",
        },
      },
      fontFamily: {
        sans: ['"Avenir Next"', '"Segoe UI"', '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "leaf-pattern": "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E5B43' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

export default config;
