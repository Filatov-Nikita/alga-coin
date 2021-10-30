import { Screen } from "quasar";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
const twConfig = resolveConfig(tailwindConfig);

function setScreenSizes(twConfig) {
  let screens = {};

  for (let screenName in twConfig.theme.screens) {
    screens[screenName] = parseInt(twConfig.theme.screens[screenName]);
  }

  Screen.setSizes(screens);
}

setScreenSizes(twConfig);

export default ({ app, router, store }) => {
  app.config.globalProperties.$fullYear = new Date().getFullYear();

  app.config.globalProperties.$app = {};
  app.config.globalProperties.$app.logout = async () => {
    await store.dispatch("auth/logout");
    await router.replace({ name: "auth.login" });
    window.location.reload();
  };
};
