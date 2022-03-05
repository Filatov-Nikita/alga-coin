import * as landingAPI from "src/api/landing";

export default {
  namespaced: true,
  state: {
    projects: null,
    news: null,
    footer: (t) => [
      { label: "White paper", to: "/file.pdf" },
      { label: "Alga Ecosystem", to: "#" },
      { label: t("landing.footer.whyAlga"), to: "#" },
      { label: "Alga Market", to: "#111", popup: true, modalMessage: "Alga Market в разработке"},
    ],
    curEco: "BANKING",
    curOwner: "0",
  },
  getters: {
    footer(state) {
      return state.footer;
    },
    projects(state) {
      return state.projects;
    },
    news(state) {
      return state.news;
    },
    newsMap(state) {
      return state.news.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});
    },
  },
  mutations: {
    setEco(state, payload) {
      state.curEco = payload;
    },
    setOwner(state, payload) {
      state.curOwner = payload;
    },
    setNews(state, payload) {
      if (!Array.isArray(payload)) return;
      state.news = payload;
    },
    setProjects(state, payload) {
      if (!Array.isArray(payload)) return;
      state.projects = payload;
    },
  },
  actions: {
    async projectsList({ commit }) {
      const { data } = await landingAPI.projectsList();
      commit("setProjects", data);
      return data;
    },
    async newsItemShow(_c, { id }) {
      const { data } = await landingAPI.newsItemShow(id);
      return data;
    },
    async newsRecomendedList(_c, { id }) {
      const { data } = await landingAPI.newsRecomendedList(id);
      return data;
    },
    async projectShow(_c, { id }) {
      const { data } = await landingAPI.projectShow(id);
      return data;
    },
    async projectShow(_c, { id }) {
      const { data } = await landingAPI.projectShow(id);
      return data;
    },
    async newsList({ commit }) {
      const { data } = await landingAPI.newsList();
      commit("setNews", data);
      return data;
    },
    async createOffer(_c, formData) {
      const { data } = await landingAPI.createOffer(formData);
      return data;
    },
  },
};
