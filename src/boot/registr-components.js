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
  app.component("Form", require("vee-validate").Form);
  app.component("AppStep", require("src/core/AppStep.vue").default);
  app.component("AppStepGroup", require("src/core/AppStepGroup.vue").default);
  app.component("AppCheckbox", require("src/core/AppCheckbox.vue").default);
  app.component("AppBtnBack", require("src/core/AppBtnBack.vue").default);
  app.component("AppModal", require("src/core/AppModal.vue").default);
  app.component(
    "AppModalWallet",
    require("src/core/AppModalWallet.vue").default
  );
};
