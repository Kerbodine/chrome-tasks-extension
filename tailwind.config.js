const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: colors.zinc,
        bg: "hsl(var(--bg))",
        font: ({ opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--text), ${opacityValue})`;
          }
          return `rgb(var(--text)`;
        },
        primary: "hsl(var(--primary))",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
