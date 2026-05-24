import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          900: "#05080f",
          800: "#080c14",
          700: "#0b1220",
          600: "#0f1a2e",
          500: "#142240",
        },
        ink: {
          DEFAULT: "#080c14",
          light: "#0b1220",
          card: "#0d1525",
        },
        gold: {
          DEFAULT: "#d4a84b",
          light: "#e8c86a",
          dark: "#b8922e",
          pale: "#c9a84c",
        },
        ivory: {
          DEFAULT: "#f0ebe0",
          muted: "#a09888",
          dim: "#7a7266",
        },
      },
      fontFamily: {
        heading: ["Cairo", "sans-serif"],
        body: ["Tajawal", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "float-slow": "floatSlow 20s ease-in-out infinite",
        "float-medium": "floatMedium 15s ease-in-out infinite",
        "pulse-gold": "pulseGold 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(10px, -20px) rotate(2deg)" },
          "66%": { transform: "translate(-10px, -10px) rotate(-1deg)" },
        },
        floatMedium: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(-15px, 15px) rotate(3deg)" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.6" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #b8922e, #d4a84b, #e8c86a)",
        "gold-gradient-subtle": "linear-gradient(135deg, rgba(212,168,75,0.2), rgba(232,200,106,0.1))",
        "dark-glow": "radial-gradient(ellipse at center, rgba(212,168,75,0.06) 0%, transparent 70%)",
        "mesh-gradient": "radial-gradient(ellipse at 20% 50%, rgba(212,168,75,0.03) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(15,26,46,0.5) 0%, transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
