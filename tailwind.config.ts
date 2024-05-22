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
      keyframes: {
        letterUp1: {
          '0%': { transform: 'translateY(1em)' },
          '100%': { transform: 'translateY(0px)' },

        },
        letterDown1: {
          '0%': { transform: 'translateY(-1em)' },
          '100%': { transform: 'translateY(0px)' },
        },
        letterUp2: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-1em)' },

        },
        letterDown2: {
          '0%': { transform: 'translateY(0em)' },
          '100%': { transform: 'translateY(1em)' },
        },

      },
      animation: {
        letterUp1: 'letterUp1 0.3s ease-in-out',
        letterDown1: 'letterDown1 0.3s ease-in-out',
        letterUp2: 'letterUp2 0.3s ease-in-out',
        letterDown2: 'letterDown2 0.3s ease-in-out',

      }
    },
  },
  plugins: [],
};
export default config;
