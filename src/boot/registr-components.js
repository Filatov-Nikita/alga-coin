import InlineSvg from "vue-inline-svg";

export default ({ app }) => {
  app.component("InlineSvg", InlineSvg);
  app.component("AppButton", require("src/core/AppButton.vue").default);
  app.component("AppInput", require("src/core/AppInput.vue").default);
  app.component("AppCodeInput", require("src/core/AppCodeInput.vue").default);
  app.component("AppConvertInput", require("src/core/AppConvertInput.vue").default);
  app.component("AppLink", require("src/core/AppLink.vue").default);
  app.component("AppTimer", require("src/core/AppTimer.vue").default);
  app.component(
    "AppWalletDisplay",
    require("src/core/AppWalletDisplay.vue").default
  );
  app.component("Form", require("vee-validate").Form);
  app.component("AppCarousel", require("src/core/AppCarousel.vue").default);
  app.component("AppCarouselSlide", require("src/core/AppCarouselSlide.vue").default);
  app.component("AppStep", require("src/core/AppStep.vue").default);
  app.component("AppStepGroup", require("src/core/AppStepGroup.vue").default);
  app.component("AppRadioGroupStep", require("src/core/AppRadioGroupStep.vue").default);
  app.component("AppCheckbox", require("src/core/AppCheckbox.vue").default);
  app.component("AppFullPage", require("src/core/AppFullPage.vue").default);
  app.component("AppFullPageScreen", require("src/core/AppFullPageSection.vue").default);
  app.component("AppBtnBack", require("src/core/AppBtnBack.vue").default);
  app.component("AppModal", require("src/core/AppModal.vue").default);
  app.component("AppPagination", require("src/core/AppPagination.vue").default);
  app.component("AppEmptyList", require("src/core/AppEmptyList.vue").default);
  app.component("AppInnerLoading", require("src/core/AppInnerLoading.vue").default);
  app.component(
    "AppModalWallet",
    require("src/core/AppModalWallet.vue").default
  );
};
