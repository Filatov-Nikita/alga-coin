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
  app.config.globalProperties.$prettyDate = function (dateStr) {
    if (typeof dateStr !== "string") return dateStr;

    const pattern =
      /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})\T(?<hh>\d{2}):(?<mm>\d{2}):(?<ss>\d{2})\Z/;

    const result = dateStr.match(pattern);
    if (!result) return dateStr;
    const groups = result.groups || {};
    return `${groups.day}.${groups.month}.${groups.year} ${groups.hh}:${groups.mm}`;
  };

  app.config.globalProperties.$app = {};
  app.config.globalProperties.$app.logout = async () => {
    await store.dispatch("auth/logout");
    await router.replace({ name: "auth.login" });
    window.location.reload();
  };

  app.config.globalProperties.$app.links = {
    twitter: "#",
    facebook: "#",
    instagram: "#",
    telegram: "#",
    serviceInfo: "#",
  };
};
