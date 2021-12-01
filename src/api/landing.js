import { MainApi } from "./utilities/service";

export function newsList(searchParams = {}) {
  return MainApi.mainKy("landing/novelties", {
    searchParams,
  }).json();
}

export function newsRecomendedList(newsId) {
  return MainApi.mainKy(`landing/novelties/${newsId}/recommended`).json();
}

export function newsItemShow(id) {
  return MainApi.mainKy(`landing/plans/${id}`).json();
}

export function projectsList() {
  return MainApi.mainKy("landing/plans").json();
}

export function projectShow(id) {
  return MainApi.mainKy(`landing/plans/${id}`).json();
}

export function createOffer(body) {
  return MainApi.mainKy
    .post("landing/proposals", {
      body,
    })
    .json();
}
