import { email } from "@vee-validate/rules";
import * as ProfileAPI from "src/api/profile";
const formatingFullDate = (date) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const m = String(newDate.getMonth() + 1);
  const month = m.length == 1 ? "0" + m : m;
  const day =
    String(newDate.getDate()).length == 1
      ? "0" + newDate.getDate()
      : newDate.getDate();
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
  return `${hours}:${minutes}:${seconds} ${day}.${month}.${year} `;
};

const formatingDate = (date) => {
  const newDate = new Date(date);
  const month = String(newDate.getMonth() + 1);
  const d = String(newDate.getDate());
  return `${d.length == 1 ? "0" + d : d}.${
    month.length == 1 ? "0" + month : month
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
    balance: null,
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
      return state.profile.cellphone;
    },
    email(state) {
      if (state.profile === null) return "";
      return state.profile.email;
    },
    getBuyList(state) {
      if (state.buyList !== null) {
        const list = state.buyList.map((item) => {
          item.status;
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
          const inder = {
            ...item.inder,
            closing_at: formatingDate(item.inder.closing_at),
            opening_at: formatingDate(item.inder.opening_at),
          };
          const orders = item.orders.map((order) => {
            return { ...order, created_at: formatingDate(order.created_at) };
          });

          return {
            ...item,
            inder,
            orders,
          };
        });
        return list;
      }
      return null;
    },

    //     closing_at:"2022-12-11T19:00:00Z"
    // closing_in_days:41
    // id:1
    // image:Object
    // name:"BTC main"
    // opening_at:"2022-08-11T19:00:00Z

    // closing_at:"01.11.2022 "
    // closing_in_days:41
    // id:1
    // image:Object
    // name:"BTC main"
    // opening_at:"05.07.2022 "

    getBalance(state) {
      if (state.balance === null)
        return {
          actual_balance: 0,
          relative_profit: null,
          is_profit_positive: false,
          coin: null,
        };
      return state.balance;
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

    setBalance(state, data) {
      state.balance = data;
    },
  },
  actions: {
    async show({ commit }) {
      const profileData = await ProfileAPI.show();
      commit("setProfile", profileData);
      commit("setName", profileData.data.name);
      return profileData;
    },

    async editName(_c, name) {
      const profileData = await ProfileAPI.editName(name);
      _c.commit("setName", name);
      return profileData;
    },

    async editPassword(_c, password) {
      const profileData = await ProfileAPI.editPassword(password);
      return profileData;
    },
    async sendMessageSupport(_c, body) {
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
    async widthdrawalIndex(_c, obj) {
      await ProfileAPI.widthdrawalIndex(obj);
    },
    async buyIndex(_c, obj) {
      const { data } = await ProfileAPI.createOrder(obj);
      return data;
    },
    async getBalanceProfile(_c) {
      const { data } = await ProfileAPI.balanceProfile();
      _c.commit("setBalance", data);
    },
  },
};
