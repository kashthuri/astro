/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      commutersSans: ["Commuters-Sans"],
      against: ["Against"],
      branch: ["Branch"],
      sulphurPoint: ["SulphurPoint"],
    },
    colors: {
      primary: "#326789",
      secondary: "#78a6c8",
      light: "#e9eef2",
      danger: "#e65c4f",
      white: "#ffffff",
      black: "#000000",
      dark: "#244d61",
      dark1: "#2e424d",
      transparent: "transparent",
    },
  },
  plugins: [],
};
