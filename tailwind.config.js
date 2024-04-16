/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#FFFFFF",
        dark: "#000000",
        secondary: "#333333",
        secondaryDark: "#1B1C20",
        primary: "#a7e92f",
      },
    },
  },
  plugins: [],
}