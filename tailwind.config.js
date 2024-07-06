/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-bg-light":
          "url('./src/assets/images/pattern-background-mobile-light.svg')",

        "tablet-bg-light":
          "url('./src/assets/images/pattern-background-tablet-light.svg')",

        "desktop-bg-light":
          "url('./src/assets/images/pattern-background-desktop-light.svg')",
      },
    },
  },
  plugins: [],
};
