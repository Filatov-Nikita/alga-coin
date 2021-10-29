export default {
  namespaced: true,
  state: {
    profile: null,
  },
  getters: {
    name(state) {
      if (state.profile === null) return "";
      return state.profile.name;
    },
  },
  mutations: {
    setProfile(state, payload) {
      if (typeof payload !== "object") return;
      state.profile = payload;
    },
  },
  actions: {
    show({ commit }) {
      commit("setProfile", { name: "Никита" });
    },
  },
};
