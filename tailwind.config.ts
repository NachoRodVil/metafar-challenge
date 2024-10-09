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
        "lilac": "#e6d7ff",
        "light-purple": "#b39eff",
        "purple": "#b069db",
        "deep-purple": "#6a1b9a"
      },
    },
  },
  plugins: [],
};
export default config;
