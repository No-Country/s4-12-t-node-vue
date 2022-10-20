/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sac": {
          DEFAULT: "#393e46",
          50: "#f7f7f7",
          100: "#eeeeee",
          200: "#929aab",
          300: "#000000",
          400: "#ffffff",
        },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  corePlugins: {
    // preflight: false,
  },
};
