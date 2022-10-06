import { email } from "@vee-validate/rules";
import * as ProfileAPI from "src/api/profile";

export default {
  namespaced: true,
  state: {
    profile: null,
    name: null,
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
  },
};
