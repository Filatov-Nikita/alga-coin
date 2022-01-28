import { testApi, MainApi } from "./utilities/service";

export function showWallet() {
  return MainApi.swot("b2c/wallet").json();
}

export function show() {
  return testApi.swot("wallet.json").json();
}
