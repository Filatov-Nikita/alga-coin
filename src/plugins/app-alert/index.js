import alertEvent from "./alert-event";
import AppAlert from "./AppAlert";

export const AppAlert = (opts) => {
  alertEvent.trigger("show", opts);
};

export default {
  install(app) {
    app.component("AppAlert", AppAlert);

    app.config.globalProperties.$alert = AppAlert;
  },
};
