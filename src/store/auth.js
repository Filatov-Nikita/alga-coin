import * as AuthAPI from "src/api/auth";
import * as Tokens from "src/api/utilities/tokens";

export default {
  namespaced: true,
  actions: {
    async login(_c, { cellphone, password }) {
      const { access_token, refresh_token } = await AuthAPI.login({
        cellphone,
        password,
      });

      Tokens.setTokensData(access_token, refresh_token);
    },
    async logout() {
      Tokens.cleanTokensData();
    }
  },
};
