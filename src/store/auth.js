import * as AuthAPI from "src/api/auth";

export default {
  namespaced: true,
  actions: {
    async login(_c, { cellphone, password }) {
      AuthAPI.login({ cellphone, password });
    },
  },
};
