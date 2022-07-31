module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      xss: { min: "230px" },
      xs: { min: "430px" },
      sm: { min: "640px" },

      md: { min: "768px" },

      lg: { min: "1024px" },

      xl: { min: "1280px" },

      "2xl": { min: "1536px" },
    },

    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
        signin: "#7a8db1",
      },
      gridTemplateRows: {
        7: "repeat(7,minmax(0,1fr))",
        8: "repeat(8,minmax(0,1fr))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
