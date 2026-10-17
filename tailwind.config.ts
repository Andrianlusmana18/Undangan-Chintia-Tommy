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
        wedding: {
          bg: "#FCF9F5",
          card: "#FFFFFF",
          cream: "#FAF7F2",
          "cream-light": "#FDFBF7",
          "cream-dark": "#F3EDE4",
          border: "#EFE6DA",
          rose: "#6E3D3D",
          "rose-dark": "#592E2E",
          "rose-light": "#8E5454",
          "rose-soft": "#FBF5F4",
          gold: "#C6A87D",
          "gold-light": "#DFC9A9",
          "gold-dark": "#9E7B4E",
          sage: "#798A73",
          "sage-light": "#E9EFE7",
          "sage-dark": "#364535",
          dark: "#2A2421",
          muted: "#8C827A",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(110, 61, 61, 0.06)",
        card: "0 10px 30px -4px rgba(110, 61, 61, 0.08)",
        floating: "0 12px 36px -4px rgba(42, 36, 33, 0.15)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
