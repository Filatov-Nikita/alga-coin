import { Screen } from "quasar";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();
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
  const global = app.config.globalProperties;
  global.$app = {};
  global.$app.logout = async () => {
    await store.dispatch("auth/logout");
    await router.replace({ name: "auth.login" });
    window.location.reload();
  };

  global.$app.links = {
    twitter: "#",
    facebook: "https://www.facebook.com/groups/1068352950606267/",
    instagram: "#",
    telegram: "https://t.me/Algacoin",
    serviceInfo: "/file.pdf",
  };
};
