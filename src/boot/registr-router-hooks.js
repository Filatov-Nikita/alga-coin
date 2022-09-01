import { hasAuth } from "src/router/utilities/auth";
import { getAccessToken } from "src/api/utilities/tokens";

export default ({ router, store }) => {
  if (getAccessToken()) {
    store.commit("auth/setAuth", true);
  }

  router.beforeEach((to, from, next) => {
    if(to.name ==='auth.login' && getAccessToken()) return next({ name: "index-directive",replace: true});
    if(to.name ==='auth.registr' && getAccessToken()) return next({ name: "index-directive",replace: true});
    if (!hasAuth(to)) return next();
    if (getAccessToken()) return next();
    return next({ name: "auth.login", replace: true });
  });
};
