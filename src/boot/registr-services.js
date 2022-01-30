import api, { testApi, MainApi } from "src/api/utilities/service";
import { cleanTokensData } from "src/api/utilities/tokens";

export default ({ router }) => {
  function registrHandlers(api) {
    api.registrHandleRejectionToken(() => {
      cleanTokensData();
      router.replace({ name: "auth.login" });
    });
  }

  registrHandlers(api);
  registrHandlers(testApi);
  registrHandlers(MainApi);
};
