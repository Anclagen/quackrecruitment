/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      transitionDuration: {
        2000: "2000ms",
        3000: "3000ms",
      },
      colors: {
        quackred: {
          DEFAULT: "#b50000",
          50: "#ffefef",
          100: "#ffdcdc",
          200: "#ffbfbf",
          300: "#ff9292",
          400: "#ff5454",
          500: "#ff1f1f",
          600: "#ff0000",
          700: "#db0000",
          800: "#b50000",
          900: "#940808",
          950: "#520000",
        },
        background: {
          DEFAULT: "#f2f2f2",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
