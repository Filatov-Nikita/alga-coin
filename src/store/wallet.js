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
    show({ commit }) {
      commit("setWallet", {
        walletNumber: "0xAbBDd166fD5DfFe50D294aEEe539CBB2547DE7DF",
        alg: "1 232 151.348",
        rub: "25 357 000",
      });
    },
  },
};
