import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5A8C5B",
        secondary: "#f6fbe7",
        background: "#f5f7e9",
        border: "#ddd",
        highlight: "#e0f4df",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        "patrick-hand": ["var(--font-patrick-hand)"],
      },
    },
  },
  plugins: [],
};

export default config;
