import { MainApi } from "./utilities/service";

export function to(json) {
  return MainApi.swot
    .post("b2c/transactions", {
      json,
    })
    .json();
}

export function history(filter = {}) {
  return MainApi.swot("b2c/transactions", {
    searchParams: filter,
  }).json();
}
