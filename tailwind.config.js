/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "1rem",
      },
      colors: {
        primary: "#006944",
        white: "#fff",
        black: "#000",
      },
      fontFamily: {
        mainFont: ["Jost", "Poppins", "sans-serif"],
      },
      fontSize: {
        normal: "16px",
      },
      screens: {
        sm: { min: "640px", max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1024px", max: "1279px" },
        xl: { min: "1280px", max: "1535px" },
        "2xl": { min: "1536px", max: "1023px" },
      },
      backgroundImage: {
        gradient:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.05) 0,rgba(0, 0, 0, 0.05) 100% )",
      },
    },
  },
  plugins: [],
};
