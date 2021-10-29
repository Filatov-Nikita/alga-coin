import api from "src/api/utilities/service";
import { updateTokens } from "src/api/auth";

export default ({ router }) => {
  api.registrRefreshFetcher((mainKy, refreshToken) => {
    return updateTokens(refreshToken);
  });

  api.registrHandleRejectionToken(() => {
    router.replace({ name: "auth.login" });
  });
};
