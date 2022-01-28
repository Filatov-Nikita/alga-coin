import * as InfoAPI from "src/api/info";

export default {
  namespaced: true,
  actions: {
    async conversion(_c, params) {
      const { data } = await InfoAPI.conversion(params);
      return data;
    },
  },
};
