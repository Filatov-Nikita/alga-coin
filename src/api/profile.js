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
  return MainApi.swot
    .post("b2c/support_issues", {
      body,
    })
    .json();
}

export function listHistoryShopping() {
  return MainApi.swot("b2c/portfolio/orders").json();

  //
}

export function listHistoryWidthdrawal() {
  return MainApi.swot("b2c/portfolio/withdrawals").json();
}

export function listPortfolio() {
  return MainApi.swot("b2c/portfolio/grouped-purchased-orders").json();
}

export function widthdrawalIndex(obj) {
  return MainApi.swot
    .post("b2c/portfolio/withdrawals", { json: { ...obj } })
    .json();
}

export function createOrder({ amount, inder_id }) {
  return MainApi.swot
    .post("b2c/portfolio/register-order", {
      json: { amount, inder_id },
    })
    .json();
}

export function balanceProfile() {
  return MainApi.swot("b2c/portfolio/balance").json();
}
