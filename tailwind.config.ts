import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "#E5E5E5",
        input: "#E5E5E5",
        ring: "#442858",
        background: "#F9F7F2",
        foreground: "#2D2D2D",
        primary: {
          DEFAULT: "#442858",
          foreground: "#FFFFFF",
          teal: "#442858",
        },
        secondary: {
          DEFAULT: "#E2725B",
          foreground: "#FFFFFF",
          terracotta: "#E2725B",
        },
        accent: {
          DEFAULT: "#FFB347",
          foreground: "#2D2D2D",
          saffron: "#FFB347",
        },
        destructive: {
          DEFAULT: "#F44336",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F0F0F0",
          foreground: "#737373",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#2D2D2D",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#2D2D2D",
        },
        stone: "#4A4A4A",
        linen: "#F9F7F2",
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        nepali: ["var(--font-noto-sans-devanagari)", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
