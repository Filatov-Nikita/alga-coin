import { testApi } from "./utilities/service";

export function show() {
  return testApi.swot('user.json').json();
}
