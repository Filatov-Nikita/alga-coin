export default {
  namespaced: true,
  state: {
    walletData: null,
  },
  getters: {
    walletData(state) {
      return state.walletData;
    },
  },
  mutations: {
    setWalletData(state, payload) {
      if (typeof payload !== "object") return;
      state.walletData = payload;
    },
  },
  actions: {
    fetchWalletData({ commit }) {
      commit("setWalletData", {
        walletNumber: "0xAbBDd166fD5DfFe50D294aEEe539CBB2547DE7DF",
        alg: "1 232 151.348",
        rub: "25 357 000",
      });
    },
  },
};
