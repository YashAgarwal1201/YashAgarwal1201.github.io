/** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "var(--color1)",
        color2: "var(--color2)",
        color3: "var(--color3)",
        color4: "var(--color4)",
        color5: "var(--color5)",
      },
      screens: {
        mdl: "896px",
      },
      fontFamily: {
        heading: ["var(--heading)", ...fontFamily.sans], // Specify backup font family as serif
        subheading: ["var(--subheading)", ...fontFamily.sans],
        content: ["var(--content)", ...fontFamily.serif], // Specify backup font family as sans-serif
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-none": {
          "::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none", // For Internet Explorer and Edge
          "scrollbar-width": "none", // For Firefox
        },
      });
    },
  ],
};
