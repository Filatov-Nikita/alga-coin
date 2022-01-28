import { MainApi } from "./utilities/service";

export function conversion(searchParams = {}) {
  return MainApi.swot("b2c/info/conversion", {
    searchParams,
  }).json();
}
