import api, { testApi } from "src/api/utilities/service";
import { updateTokens } from "src/api/auth";

export default ({ router }) => {
  function registrHandlers(api) {
    api.registrRefreshFetcher((mainKy, refreshToken) => {
      return updateTokens(refreshToken);
    });

    api.registrHandleRejectionToken(() => {
      router.replace({ name: "auth.login" });
    });
  }

  registrHandlers(api);
  registrHandlers(testApi);
};
