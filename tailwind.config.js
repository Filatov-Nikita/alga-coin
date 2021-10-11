module.exports = {
  prefix: "tw-",
  purge: {
    content: ["./src/**/*.vue"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        base: "8px",
      },
      spacing: {
        "4-1": "1.125rem",
        "7-1": "1.875rem",
      },
    },
    colors: {
      primary: "#005BAA",
      secondary: "#006DCC",
      invalid: "#EF233C",
      blue: "#0A8DFF",
      valid: "#4AD66D",
      dark: "#0A1E3E",
      "dark-blue": "#003870",
      "blue-hover": "#0083F5",
      white: "#FFFFFF",
    },
    fontFamily: {
      stolzl: "Stolzl",
    },
    fontSize: {
      xxs: "0.750rem",
      xs: "0.875rem",
      base: "1rem",
      sm: "1.125rem",
      md2: "1.5rem",
      md1: "2.250rem",
      lg: "3rem",
      xl: "4.5rem",
    },
    screens: {
      xl: "1366px",
    },
    container: {
      DEFAULT: "100%",
      center: true,
      xl: "1366px",
      padding: {
        DEFAULT: "25px",
        xl: "30px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
