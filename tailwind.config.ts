import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "electric-indigo": "#6366F1",
        "electric-indigo-soft": "rgba(99, 102, 241, 0.12)",
        "soft-dark": "#121417",
        "soft-dark-elevated": "#0B0D10",
        "platinum": "#E1E1E1",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      boxShadow: {
        elite: "0 24px 80px rgba(0, 0, 0, 0.9)",
        "elite-soft": "0 20px 60px rgba(15, 23, 42, 0.85)",
        card: "0 1px 0 rgba(255, 255, 255, 0.02), 0 20px 60px rgba(15, 23, 42, 0.85)",
        "card-hover": "0 1px 0 rgba(255, 255, 255, 0.06), 0 32px 90px rgba(15, 23, 42, 0.95)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
