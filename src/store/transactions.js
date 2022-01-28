import * as transactionsAPI from "src/api/transactions";

export default {
  namespaced: true,
  actions: {
    async to(_c, body) {
      const { data } = await transactionsAPI.to(body);
      return data;
    },
    async showHistory(_c, filter = {}) {
      const result = await transactionsAPI.history(filter);
      return result;
    },
  },
};
