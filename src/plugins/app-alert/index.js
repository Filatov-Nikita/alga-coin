import alertEvent from "./alert-event";
import AppAlertComponent from "./AppAlert";

export const AppAlert = (opts) => {
  alertEvent.trigger("show", opts);
};

export default {
  install(app) {
    app.component("AppAlert", AppAlertComponent);

    app.config.globalProperties.$alert = AppAlert;
  },
};

export function useAlert() {
  return AppAlert;
}
