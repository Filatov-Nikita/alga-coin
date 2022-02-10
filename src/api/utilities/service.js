import Service from "src/api/utilities/server";

const api = new Service("http://alga.test", {
  apiPath: "api",
  timeout: 10000,
  tokenName: "b2c",
});

export const testApi = new Service("", {
  apiPath: "api",
  timeout: 10000,
  tokenName: "b2c",
});

export const MainApi = new Service("https://alga.2apps.ru", {
  apiPath: "api",
  timeout: 10000,
  tokenName: "b2c",
});

export default api;
