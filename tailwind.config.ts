import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0F62FE",
          foreground: "#F4F4F4"
        }
      },
      backgroundImage: {
        "grid-light": "radial-gradient(circle at 1px 1px, rgba(15,98,254,0.15) 0, transparent 0.5px)"
      }
    }
  },
  plugins: []
};

export default config;
