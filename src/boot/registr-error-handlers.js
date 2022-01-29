import { TimeoutError, HTTPError } from "ky";
import { AppAlert } from "src/plugins/app-alert";

export default ({ app, router }) => {
  window.addEventListener("unhandledrejection", ({ reason: err }) => {
    errorHandler(err);
  });

  window.addEventListener("error", (errMessage) => {
    console.error("global", errMessage);
  });

  app.config.errorHandler = (err, vm, info) => {
    errorHandler(err);
  };

  function errorHandler(err) {
    if (err instanceof TimeoutError) {
      return AppAlert({
        message: (t) => t("globalErrors.timeout"),
        type: "negative",
      });
    } else if (err instanceof HTTPError) {
      if (err.response.status === 401) {
        AppAlert({
          message: (t) => t("globalErrors.401"),
          type: "negative",
        });
        return router.replace({ name: "auth.login" });
      } else if (err.response.status === 403) {
        return AppAlert({
          message: (t) => t("globalErrors.403"),
          type: "negative",
        });
      } else if (err.response.status === 404) {
        return AppAlert({
          message: (t) => t("globalErrors.404"),
          type: "negative",
        });
      } else if (err.response.status === 429) {
        return AppAlert({
          message: (t) => t("globalErrors.429"),
          type: "negative",
        });
      }

      return AppAlert({
        message: (t) => t("globalErrors.500"),
        type: "negative",
      });
    }

    console.error(err);
  }
};
