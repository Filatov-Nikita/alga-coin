export default {
  namespaced: true,
  state: {
    footer: [
      { label: "White paper", to: "#" },
      { label: "Alga Ecosystem", to: "#" },
      { label: "Почему Alga", to: "#" },
      { label: "Alga Market", to: "#" },
    ],
    curEco: "",
  },
  getters: {
    footer(state) {
      return state.footer;
    },
  },
  mutations: {
    setEco(state, payload) {
      state.curEco = payload;
    }
  }
};
