export default {
  namespaced: true,
  state: {
    profileData: null,
  },
  getters: {
    name(state) {
      if (state.profileData === null) return "";
      return state.profileData.name;
    },
  },
  mutations: {
    setProfileData(state, payload) {
      if (typeof payload !== "object") return;
      state.profileData = payload;
    },
  },
  actions: {
    fetchProfileData({ commit }) {
      commit("setProfileData", { name: "Никита" });
    },
  },
};
