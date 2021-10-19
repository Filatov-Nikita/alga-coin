import { Screen } from "quasar";
import EventBus from "src/helpers/EventBus";

Screen.setSizes({ xl: 1366 });

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
