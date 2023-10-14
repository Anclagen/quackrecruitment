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
        primary: {
          DEFAULT: "#000000",
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
        },
        secondary: {
          DEFAULT: "#400080",
          50: "#f9f4ff",
          100: "#f2e6ff",
          200: "#e6d2ff",
          300: "#d3aeff",
          400: "#b87bff",
          500: "#9d49ff",
          600: "#8825f8",
          700: "#7315db",
          800: "#6317b2",
          900: "#52148f",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
