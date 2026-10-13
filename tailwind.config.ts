import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090C",
        surface: {
          50: "#131722",
          100: "#0F131C",
          200: "#0B0E15",
          300: "#08090C",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.07)",
          medium: "rgba(255, 255, 255, 0.12)",
          bright: "rgba(255, 255, 255, 0.22)",
        },
        accent: {
          cyan: "#00F5FF",
          sky: "#38BDF8",
          blue: "#2563EB",
          emerald: "#10B981",
          amber: "#F59E0B",
          violet: "#818CF8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-fade": "glow-fade 3s ease-in-out infinite alternate",
        "radar": "radar 4s linear infinite",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        "glow-fade": {
          "0%": { opacity: "0.3", transform: "scale(0.98)" },
          "100%": { opacity: "0.7", transform: "scale(1.02)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
