import * as AuthAPI from "src/api/auth";
import * as Tokens from "src/api/utilities/tokens";

export default {
  namespaced: true,
  state: {
    isAuth: false,
  },
  getters: {
    isAuth(state) {
      return state.isAuth;
    },
  },
  mutations: {
    setAuth(state, value) {
      if (typeof value !== "boolean") return;
      state.isAuth = value;
    },
  },
  actions: {
    async login({ commit }, { mail, password }) {
      const {
        data: { token, expires_in },
      } = await AuthAPI.login({
        email: mail,
        password,
      });

      Tokens.setTokensData(token, expires_in);
      commit("setAuth", true);
      return true;
    },
    async logout({ commit }) {
      Tokens.cleanTokensData();
      commit("setAuth", false);
    },
    async registr(_c, userData) {
      const result = await AuthAPI.registr(userData);
      return result.data;
    },
    async setPassword(_c, data) {
      await AuthAPI.setPassword(data);
      return true;
    },
    async getVerifingCode(_c, { mail }) {
      await AuthAPI.getVerifingCode({ mail });
      return true;
    },

    async setNewPassword(_c, data) {
      await AuthAPI.setNewPassword(data);
    },

    async editPhone(_c, data) {
      await AuthAPI.setNewPhone(data);
    },
  },
};
