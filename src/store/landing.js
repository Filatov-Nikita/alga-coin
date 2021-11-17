export default {
  namespaced: true,
  state: {
    footer: [
      { label: "White paper", to: "#" },
      { label: "Alga Ecosystem", to: "#" },
      { label: "Почему Alga", to: "#" },
      { label: "Alga Market", to: "#" },
    ],
  },
  getters: {
    footer(state) {
      return state.footer;
    },
  },
};
