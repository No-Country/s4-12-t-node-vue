/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "paleta-sac": {
          DEFAULT: "#393e46",
          50: "#f7f7f7",
          100: "#eeeeee",
          200: "#929aab",
          300: "#000000",
          400: "#ffffff",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  corePlugins: {
    // preflight: false,
  },
};
