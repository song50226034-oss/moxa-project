import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#20201d",
        stonewash: "#f6f3ed",
        rice: "#fffdf8",
        matcha: "#687768",
        cedar: "#39352e",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(32, 32, 29, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
