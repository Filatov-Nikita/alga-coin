import { Screen } from "quasar";
import EventBus from "src/helpers/EventBus";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
const twConfig = resolveConfig(tailwindConfig);

let screens = {};

for (let screenName in twConfig.theme.screens) {
  screens[screenName] = parseInt(twConfig.theme.screens[screenName]);
}

Screen.setSizes(screens);

// чтобы другие вызовы start не отменяли stop, который не ожидает чтобы его отменили из вне
let stopedName;

const evtDialog = new EventBus();

export default ({ app }) => {
  const dialog = (app.config.globalProperties.$aDialog = {});

  dialog.bus = evtDialog;

  dialog.open = (name) => {
    evtDialog.trigger("open", name);
  };

  dialog.close = (name) => {
    evtDialog.trigger("close", name);
  };

  app.config.globalProperties.$scroll = {
    stop(name) {
      document.body.style.overflow = "hidden";
      if (!stopedName) stopedName = name;
    },
    start(name) {
      if (stopedName !== name) return;
      document.body.style.overflow = "";
      stopedName = "";
    },
  };
};
