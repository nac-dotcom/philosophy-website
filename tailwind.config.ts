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
          900: "#080A0F",
          800: "#101217",
          700: "#181C26",
          600: "#202536",
          500: "#2A3040",
        },
        ink: {
          DEFAULT: "#080A0F",
          light: "#101217",
          card: "#181C26",
        },
        gold: {
          DEFAULT: "#D6A94A",
          light: "#E8C86A",
          dark: "#A98235",
          muted: "#A98235",
          pale: "#C9A84C",
        },
        ivory: {
          DEFAULT: "#F2EFE7",
          muted: "#A9A9A9",
          dim: "#7A7266",
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
        "shimmer": "shimmer 3s ease-in-out infinite",
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
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #A98235, #D6A94A, #E8C86A)",
        "gold-gradient-subtle": "linear-gradient(135deg, rgba(214,169,74,0.2), rgba(232,200,106,0.1))",
        "dark-glow": "radial-gradient(ellipse at center, rgba(214,169,74,0.06) 0%, transparent 70%)",
        "mesh-gradient": "radial-gradient(ellipse at 20% 50%, rgba(214,169,74,0.03) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(16,18,23,0.5) 0%, transparent 50%)",
        "card-gradient": "linear-gradient(135deg, rgba(24,28,38,0.8) 0%, rgba(16,18,23,0.9) 100%)",
        "gold-border": "linear-gradient(135deg, rgba(214,169,74,0.3), rgba(169,130,53,0.1))",
      },
    },
  },
  plugins: [],
};

export default config;
