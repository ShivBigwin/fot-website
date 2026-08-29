import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B2D5C",
          50: "#EAF1FB",
          100: "#D2E2F6",
          400: "#3D6FA8",
          500: "#0B2D5C",
          600: "#082044",
        },
        azure: {
          DEFAULT: "#2E86DE",
          50: "#EAF4FE",
          100: "#D2E8FD",
          500: "#2E86DE",
          600: "#1D6FC2",
        },
        ink: {
          DEFAULT: "#0F1A2B",
          700: "#1C2C42",
          500: "#46566B",
        },
        cream: "#F5F9FC",
        ice: "#E6F0FA",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #0B2D5C 0%, #2E86DE 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, #D2E2F6 0%, #D2E8FD 100%)",
        "brand-radial": "radial-gradient(circle at 30% 20%, #3D6FA8 0%, #2E86DE 60%, #1D6FC2 100%)",
      },
      boxShadow: {
        brand: "0 20px 40px -12px rgba(11, 45, 92, 0.35)",
        card: "0 10px 30px -10px rgba(25, 22, 34, 0.08)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "count-ring": {
          "0%": { strokeDashoffset: "301" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 6s linear infinite",
        float: "float 4s ease-in-out infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
