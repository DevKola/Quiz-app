/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-bg-light":
          "url('./src/assets/images/pattern-background-mobile-light.svg')",
        "mobile-bg-dark":
          "url('./src/assets/images/pattern-background-mobile-dark.svg')",

        "tablet-bg-light":
          "url('./src/assets/images/pattern-background-tablet-light.svg')",
        "tablet-bg-dark":
          "url('./src/assets/images/pattern-background-tablet-dark.svg')",

        "desktop-bg-light":
          "url('./src/assets/images/pattern-background-desktop-light.svg')",
        "desktop-bg-dark":
          "url('./src/assets/images/pattern-background-desktop-dark.svg')",
      },
    },
  },
  plugins: [],
};
