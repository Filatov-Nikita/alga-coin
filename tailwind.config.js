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
        "2-1": "0.625rem",
        "3-1": "0.875rem",
        "4-1": "1.125rem",
        "7-1": "1.875rem",
        2.25: "0.563rem",
        3.5: "0.875rem",
        6.25: "1.563rem",
        7.5: "1.875rem",
        15: "3.75rem",
        16: "4.625rem",
      },
      letterSpacing: {
        widest: "0.5em",
        smallest: "0.1em",
        mid: "0.2em",
      },
    },
    colors: {
      primary: "#005BAA",
      secondary: "#006DCC",
      invalid: "#EF233C",
      blue: "#0A8DFF",
      green: "#4AD66D",
      valid: "#4AD66D",
      dark: "#0A1E3E",
      white: "#FFFFFF",
      "deep-dark": "#001538",
      "dark-blue": "#003870",
      "blue-hover": "#0083F5",
      "dark-blue-cover": "#000320",
      "dark-gray": "#141734",
      "text-gray": "#9596a3"
    },
    fontFamily: {
      stolzl: "Stolzl",
      ubuntu: "Ubuntu",
    },
    fontSize: {
      "xxs-2": "0.5rem",
      "xxs-1": "0.625rem",
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
      xl: "1200px",
    },
    container: {
      DEFAULT: "100%",
      center: true,
      xl: "1230px",
      sm: "100%",
      padding: {
        DEFAULT: "15px",
        xl: "130px",
        sm: "15px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-safe-area")],
};
