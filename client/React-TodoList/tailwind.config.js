const materialPalette = require("./materialPalette.js");

module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.js",
    "./src/**/*.svelte",
    "./src/**/*.jsx",
    "./public/*.html",
  ],
  theme: {
    boxShadow: {
      default:
        "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",
    },
    extend: {},
    colors: materialPalette,
    alphaColors: ["deep-purple.500"],
  },
  variants: {
    backgroundColor: ["dark", "hover"],
    textColor: ["dark"],
    placeholderColor: ["dark-placeholder"],
    borderColor: ["dark", "focus"],
  },
  plugins: [
    require("tailwindcss-bg-alpha")(),
    require("tailwindcss-dark-mode")(),
  ],
};
