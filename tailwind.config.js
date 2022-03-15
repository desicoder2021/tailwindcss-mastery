const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./*.html"],

  theme: {
    debugScreens: {
      position: ["top", "left"],
    },

    // Overwrite the tailwind classes

    extend: {
      // add the tailwind classes
      fontFamily: {
        title: ["Fredoka", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [require("tailwindcss-debug-screens")],
};
