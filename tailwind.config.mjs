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
        arrow_down: {
          "0%": { transform: "translateY(8%)" },
          "100%": { transform: "translateY(-8%)" },
        },
        bobbing: {
          "0%": { transform: "translateY(1%)" },
          "100%": { transform: "translateY(-1%)" },
        },
        ripple: {
          "0%": { transform: "scale(0.5)", opacity: "0.6" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "transalteY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float_up: "float_up 30s linear infinite",
        arrow_down: "arrow_down 0.5s ease-in-out infinite alternate",
        bobbing: "bobbing 1.5s ease-in-out infinite alternate",
        ripple: "ripple 0.5s ease-out forwards",
        fadeIn: "fadeIn 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
