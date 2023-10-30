module.exports = {
  prefix: "tw-",
  purge: {
    content: ["./src/**/*.vue"],
  },
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      
      gridTemplateRows: {
        '1_auto': "1fr auto"
      },
      borderRadius: {
        base: "8px",
        lg2: "10px",
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
        15.5: "4.375rem",
        15.75: "4.25rem",
        16: "4.625rem",
        30: "7.5rem",
        42: "10.5rem",
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
      "dark-blue-2": "#272B4F",
      "dark-blue-3": "#101333",

      "blue-hover": "#0083F5",
      "dark-blue-cover": "#000320",
      "dark-gray": "#141734",
      "text-gray": "#9596a3",
      "text-gray-dark-50": "#6F7186",
      "purple-dark": "#9596A3",
      "purple-light": "#BEC3FF",
      "gray-border": "#1D1D1D",
      black: "#000000",
      title: "#575656",
      "title-light": "#5F6368",
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
        xl: "60px",
        sm: "15px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-safe-area")],
};
