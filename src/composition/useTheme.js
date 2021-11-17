import { ref, provide } from "vue";

export default function () {
  const themes = {
    default: "#0083F5",
    orange: "#FF8F3E",
    purple: "#C92579",
    red: "#EA2B37",
    darkGreen: "#2DA149",
    lightGreen: "#229259",
    yellow: "#FFCA10",
    indigo: "#555AC3",
    biruze: "#2C7B95",
    darkBlue: "#497AC3",
    blue: "#3371BA",
  };

  const theme = ref("default");

  provide("themes", themes);
  provide("theme", theme);
  provide("switchTheme", (name) => {
    theme.value = name;
  });

  return {
    themes,
    theme,
  };
}
