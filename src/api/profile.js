import { testApi, MainApi } from "./utilities/service";

export function show() {
  return MainApi.swot("b2c/profile").json();
}

export function editName(name) {
  return MainApi.swot
    .patch("b2c/profile", {
      body: JSON.stringify({ name: name }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .json();
}

export function editPassword(password) {
  return MainApi.swot
    .put("b2c/profile/password", {
      json: { password },
      headers: {
        "Content-Type": "application/json",
      },
    })
    .json();
}

export function sendAppear(body) {
  console.log(body);
  return MainApi.swot
    .post("b2c/support_issues", {
      body,
    })
    .json();
}
