import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: "#ffd046",
        clay: "#e27042",
        peach: "#f7a482",
        signal: "#ee0007",
        ink: "#080a12",
        coal: "#10131c",
      },
      boxShadow: {
        line: "0 1px 0 rgba(8, 10, 18, 0.08)",
        lift: "0 24px 80px rgba(8, 10, 18, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
