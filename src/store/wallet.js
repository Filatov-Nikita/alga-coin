import * as walletAPI from "src/api/wallet";

export default {
  namespaced: true,
  state: {
    wallet: null,
  },
  getters: {
    walletData(state) {
      return state.wallet;
    },
  },
  mutations: {
    setWallet(state, payload) {
      if (typeof payload !== "object") return;
      state.wallet = payload;
    },
  },
  actions: {
    async show({ commit }) {
      const walletData = await walletAPI.show();
      commit("setWallet", {
        walletNumber: walletData.wallet_number,
        alg: walletData.alg,
        rub: walletData.rub
      });
      return walletData;
    },
  },
};
