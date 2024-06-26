import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './mdx-components.tsx',
  ],
  theme: {
    extend: {
      height: {
        '30': '30%',
        '1/10':  '10%',
        '90':  '90%',
        '70': '70%',
        '60':'60%'
      },
      width: {
        '30': '30%',
      },
      animation: {
        "text-gradient": "text-gradient 5s linear infinite",
      },
      keyframes: {
        "text-gradient": {
          "to": {
            "backgroundPosition": "200% center"
          }
        },
      },
    },
  },
  plugins: [],
};
export default config;
