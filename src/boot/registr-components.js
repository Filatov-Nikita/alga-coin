import InlineSvg from "vue-inline-svg";

export default ({ app }) => {
  app.component("InlineSvg", InlineSvg);
  app.component("AppButton", require("src/core/AppButton.vue").default);
  app.component("AppInput", require("src/core/AppInput.vue").default);
  app.component("AppCodeInput", require("src/core/AppCodeInput.vue").default);
  app.component("AppLink", require("src/core/AppLink.vue").default);
  app.component("AppTimer", require("src/core/AppTimer.vue").default);
  app.component(
    "AppCurrencyInput",
    require("src/core/AppCurrencyInput.vue").default
  );
  app.component(
    "AppWalletDisplay",
    require("src/core/AppWalletDisplay.vue").default
  );
  app.component("AppAlert", require("src/core/AppAlert.vue").default);
  app.component("AppCheckbox", require("src/core/AppCheckbox.vue").default);
  app.component("AppFormStep", require("src/core/AppFormStep.vue").default);
  app.component("AppFormWizard", require("src/core/AppFormWizard.vue").default);
};
