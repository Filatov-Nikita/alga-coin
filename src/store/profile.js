import { email } from "@vee-validate/rules";
import * as ProfileAPI from "src/api/profile";
const formatingFullDate = (date) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month =
    String(newDate.getMonth()).length == 1
      ? "0" + newDate.getMonth()
      : newDate.getMonth();
  const day =
    String(newDate.getDay()).length == 1
      ? "0" + newDate.getDay()
      : newDate.getDay();
  const hours =
    String(newDate.getHours()).length == 1
      ? "0" + newDate.getHours()
      : newDate.getHours();
  const minutes =
    String(newDate.getMinutes()).length == 1
      ? "0" + newDate.getMinutes()
      : newDate.getMinutes();
  const seconds =
    String(newDate.getSeconds()).length == 1
      ? "0" + newDate.getSeconds()
      : newDate.getSeconds();
  return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
};

const formatingDate = (date) => {
  const newDate = new Date(date);
  return `${
    String(newDate.getDay()).length == 1
      ? "0" + newDate.getDay()
      : newDate.getDay()
  }.${
    String(newDate.getMonth()).length == 1
      ? "0" + newDate.getMonth()
      : newDate.getMonth()
  }.${newDate.getFullYear()} `;
};
export default {
  namespaced: true,
  state: {
    profile: null,
    name: null,
    buyList: null,
    widthdrawalList: null,
    porfolioList: null,
  },
  getters: {
    name(state) {
      if (state.name === null) return "";
      const arrStr = state.name.split(" ");
      if (arrStr.length !== 3) return arrStr[0];
      return arrStr[1];
    },
    fio(state) {
      if (state.profile === null) return "";
      return state.profile.name;
    },
    phone(state) {
      if (state.profile === null) return "";
      return state.profile.cellphone.replace("+7", "");
    },
    email(state) {
      if (state.profile === null) return "";
      return state.profile.email;
    },
    getBuyList(state) {
      if (state.buyList !== null) {
        const list = state.buyList.map((item) => {
          return {
            ...item,
            created_at: formatingFullDate(item["created_at"]),
          };
        });
        return list;
      }
      return null;
    },

    getWidthdrawalList(state) {
      if (state.widthdrawalList !== null) {
        const list = state.widthdrawalList.map((item) => {
          return {
            ...item,
            created_at: formatingFullDate(item["created_at"]),
          };
        });
        return list;
      }
      return null;
    },
    getPorfolioList(state) {
      if (state.porfolioList !== null) {
        const list = state.porfolioList.map((item) => {
          return {
            ...item,
            closing_at: formatingDate(item["closing_at"]),
            opening_at: formatingDate(item["opening_at"]),
            withdrawal_since: formatingDate(item["withdrawal_since"]),
            contracts: item.contracts.map((contract) => {
              return {
                ...contract,
                created_at: formatingDate(contract["created_at"]),
              };
            }),
          };
        });
        return list;
      }
      return null;
    },
  },
  mutations: {
    setProfile(state, payload) {
      if (typeof payload !== "object") return;
      state.profile = payload.data;
    },
    setName(state, payload) {
      state.name = payload;
    },
    setFio(state, payload) {
      state.profile.name = payload;
    },
    setListBuy(state, payload) {
      state.buyList = payload;
    },
    setListWidthdrawal(state, payload) {
      state.widthdrawalList = payload;
    },
    setListPorfolio(state, payload) {
      state.porfolioList = payload;
    },
  },
  actions: {
    async show({ commit }) {
      const profileData = await ProfileAPI.show();
      console.log(profileData);
      commit("setProfile", profileData);
      commit("setName", profileData.data.name);
      return profileData;
    },

    async editName(_c, name) {
      const profileData = await ProfileAPI.editName(name);
      console.log(name);
      _c.commit("setName", name);
      return profileData;
    },

    async editPassword(_c, password) {
      const profileData = await ProfileAPI.editPassword(password);
      return profileData;
    },
    async sendMessageSupport(_c, body) {
      console.log(body);
      const res = await ProfileAPI.sendAppear(body);
      return res;
    },

    async listHistoryBuy(_c) {
      const { data } = await ProfileAPI.listHistoryShopping();
      _c.commit("setListBuy", data);
    },
    async listHistoryWidthdrawal(_c) {
      const { data } = await ProfileAPI.listHistoryWidthdrawal();
      _c.commit("setListWidthdrawal", data);
    },
    async listPortfolioData(_c) {
      const { data } = await ProfileAPI.listPortfolio();
      _c.commit("setListPorfolio", data);
    },
    async widthdrawalIndex(_c, address) {
      await ProfileAPI.widthdrawalIndex(address);
    },
  },
};
