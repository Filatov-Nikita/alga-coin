import * as landingAPI from "src/api/landing";

const formatingDate = (date) => {
  const newDate = new Date(date);
  
  const m = String(newDate.getMonth() + 1);
  const month = m.length == 1 ? "0" + m : m;
  return `${newDate.getDate()}.${month
  }.${newDate.getFullYear()} `;
};
export default {
  namespaced: true,
  state: {
    derivatives: null,
    projects: null,
    news: null,
    footer: (t) => [
      { label: "White paper", to: t("landing.footer.whitePaper") },
      { label: "Roadmap", to: t("landing.footer.roadmapFile") },
      {
        label: t("landing.footer.whyAlga"),
        to: t("landing.footer.whyAlgaFile"),
      },
      {
        label: "Alga Market",
        to: "#",
        popup: true,
        modalMessage: t("landing.footer.algaMarket"),
      },
    ],
    curEco: "BANKING",
    curOwner: "0",
  },
  getters: {
    derivatives(state) {
      if (state.derivatives?.length > 0) {
        const newDirevative = state.derivatives.map((item) => {
          return {
            ...item,
            closing_at: formatingDate(item["closing_at"]),
            opening_at: formatingDate(item["opening_at"]),
            withdrawal_since: formatingDate(item["withdrawal_since"]),
          };
        });
        return newDirevative;
      }
      return null;
    },

    chart(state) {
      return state.chart;
    },

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
    setDerivatives(state, payload) {
      state.derivatives = payload;
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

    async getDerivatives({ commit }) {
      const { data } = await landingAPI.getDerivatives();
      commit("setDerivatives", data);
      return data;
    },

    async getChartDerivative({ commit }, id) {
      const { data } = await landingAPI.getChartDerivative(id);
      return data;
    },
    async getChartDerivativeNewTime({ commit }, obj) {
      const { data } = await landingAPI.getChartDerivative(obj.id, obj.time);
      return data;
    },
  },
};
