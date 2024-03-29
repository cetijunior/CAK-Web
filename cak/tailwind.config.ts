import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        glow: '0 0 8px 2px rgba(255, 255, 255, 0.6)',
      },
      fontFamily:{
        'fuel': ['pf-fuel-decay', 'sans-serif'],
        'typewriter' : ['nitti-typewriter-normal', 'sans-serif'],
        'grimes' : ['pf-fuel-grime', 'sans-serif'],
      }
    },
  },
  plugins: [require('tailwind-scrollbar'),],
};
export default config;
