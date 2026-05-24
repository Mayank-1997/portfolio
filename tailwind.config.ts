import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#fff7e6",
        border: "rgba(255, 194, 87, 0.16)",
        muted: "#a8a29e",
        primary: {
          DEFAULT: "#ffb224",
          foreground: "#120b03"
        },
        accent: {
          DEFAULT: "#ff6b00",
          foreground: "#150900"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-space)", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glow: "0 0 55px rgba(255, 159, 28, 0.24)",
        panel: "0 18px 80px rgba(0, 0, 0, 0.45)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 1px 1px, rgba(255,178,36,.22) 1px, transparent 0)"
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        }
      },
      animation: {
        scan: "scan 4.5s linear infinite",
        shimmer: "shimmer 8s linear infinite",
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: [animate]
};

export default config;
