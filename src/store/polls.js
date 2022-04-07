import * as PollsAPI from "src/api/polls";

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async list(_c, filter = {}) {
      const polls = await PollsAPI.list(filter);
      return polls;
    },
    async show(_c, { id }) {
      const poll = await PollsAPI.show(id);
      return poll.data;
    },
    async vote(_c, { id, option }) {
      await PollsAPI.vote(id, option);
      return true;
    },
  },
};
