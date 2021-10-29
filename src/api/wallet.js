import { testApi } from "./utilities/service";

export function show() {
  return testApi.swot("wallet.json").json();
}
