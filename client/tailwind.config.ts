import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        navbar: "linear-gradient(3.141592653589793rad, rgba(3, 18, 26, 0.325) 50%, rgba(3, 18, 26, 0) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
