// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        glossyLoop: "glossy 3s ease-in-out infinite",
      },
      keyframes: {
        glossy: {
          "0%": { left: "-75%" },
          "50%": { left: "125%" },
          "100%": { left: "125%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
