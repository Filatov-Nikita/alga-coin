export function markRoute(route = {}) {
  if (!route.meta) route.meta = {};
  route.meta._auth = true;
  return route;
}

export function markAuth(...routes) {
  return routes.map(markRoute);
}

export function hasAuth(route = {}) {
  return !!(route.meta && route.meta._auth);
}
