import { MainApi } from "src/api/utilities/service";

export function list(filter) {
  return MainApi.swot("b2c/polls", {
    searchParams: filter,
  }).json();
}

export function show(id) {
  
  return MainApi.swot(`b2c/polls/${id}`).json();
}

export function vote(id, option) {
  return MainApi.swot.post(`b2c/polls/${id}/votes`, {
    json: { option },
  });
}
