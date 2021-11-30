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
        message: "Время ожидания запроса истекло. Повторите запрос еще раз.",
        type: "negative",
      });
    } else if (err instanceof HTTPError) {
      if (err.response.status === 401) {
        AppAlert({
          message: "Для совершения действия необходимо авторизоваться.",
          type: "negative",
        });
        return router.replace({ name: "auth.login" });
      } else if (err.response.status === 403) {
        return AppAlert({
          message: "Недостаточно прав для совершения действия.",
          type: "negative",
        });
      } else if (err.response.status === 404) {
        return AppAlert({
          message: "Неудалось найти запрашиваемый ресурс",
          type: "negative",
        });
      } else if (err.response.status === 429) {
        return AppAlert({
          message: "Вы сделали слишком много попыток. Надо немного подождать.",
          type: "negative",
        });
      }

      return AppAlert({
        message:
          "На сервере пошло что-то не так, возможно скоро все исправят. Если проблема не исчезнет, напишите об этом нам.",
        type: "negative",
      });
    }

    console.error(err);
  }
};
