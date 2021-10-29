import alertEvent from "./alert-event";
import AppAlert from "./AppAlert";

export default {
  install(app) {
    app.component("AppAlert", AppAlert);

    app.config.globalProperties.$alert = (opts) => {
      alertEvent.trigger('show', opts);
    }
  },
};
