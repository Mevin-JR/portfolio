/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        float_up: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 -140px" },
        },
      },
      animation: {
        float_up: "float_up 30s linear infinite",
      },
    },
  },
  plugins: [],
};
