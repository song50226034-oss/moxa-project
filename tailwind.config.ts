import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#20201d",
        stonewash: "#f6f3ed",
        rice: "#fffdf8",
        matcha: "#687768",
        cedar: "#39352e",
        warmbeige: "#e8e2d9",
        softgray: "#9a958e",
        gold: "#b8a07d",
      },
      fontFamily: {
        sans: [
          "var(--font-noto-jp)",
          "var(--font-noto-sc)",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(32, 32, 29, 0.08)",
        premium: "0 25px 60px rgba(32, 32, 29, 0.12)",
        card: "0 4px 20px rgba(32, 32, 29, 0.06)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
