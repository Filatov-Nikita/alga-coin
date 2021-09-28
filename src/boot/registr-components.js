import InlineSvg from "vue-inline-svg";

export default ({ app }) => {
  app.component("InlineSvg", InlineSvg);
  app.component("AppButton", require("src/core/AppButton.vue").default);
  app.component("AppInput", require("src/core/AppInput.vue").default);
  app.component("AppCodeInput", require("src/core/AppCodeInput.vue").default);
};
