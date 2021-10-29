import Service from "src/api/utilities/server";

const api = new Service("http://193.176.79.85", {
  apiPath: "api",
  timeout: 10000,
  tokenName: "b2c",
});

export default api;
