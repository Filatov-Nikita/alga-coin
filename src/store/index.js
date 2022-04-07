import { store } from "quasar/wrappers";
import { createStore } from "vuex";

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      profile: require("./profile.js").default,
      wallet: require("./wallet.js").default,
      auth: require("./auth.js").default,
      landing: require("./landing").default,
      info: require("./info").default,
      transactions: require("./transactions").default,
      polls: require("./polls").default,
    },
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
