import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#27313d",
        muted: "#687482",
        line: "#dce4e8",
        paper: "#fbfcf8",
        soft: "#eef6f3",
        mint: "#79b8a8",
        "mint-dark": "#347969",
        coral: "#ef8f74",
        gold: "#e5b85c"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(39, 49, 61, 0.12)",
        card: "0 8px 22px rgba(39, 49, 61, 0.06)"
      },
      fontFamily: {
        sans: ["Microsoft YaHei", "PingFang SC", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
