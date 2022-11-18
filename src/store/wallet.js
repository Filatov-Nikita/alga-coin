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
    async create({ commit }, obj) {
      const res = await walletAPI.create(obj);
      return res
    },
    async createFiat({ commit }, obj) {
      const res = await walletAPI.createFiat(obj);
      return res
    },
    async show({ commit }) {
      const { data: walletData } = await walletAPI.showWallet();

      commit("setWallet", {
        walletNumber: walletData.address,
        alg: walletData.balance.value,
        rub: walletData.balance_in_currency[0].amount.value,
      });

      return walletData;
    },
  },
};
