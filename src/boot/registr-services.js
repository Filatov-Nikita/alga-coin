import api, { testApi } from "src/api/utilities/service";

export default ({ router }) => {
  function registrHandlers(api) {
    api.registrHandleRejectionToken(() => {
      router.replace({ name: "auth.login" });
    });
  }

  registrHandlers(api);
  registrHandlers(testApi);
};
