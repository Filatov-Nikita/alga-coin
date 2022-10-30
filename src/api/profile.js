import { testApi, MainApi, MainApiDbg } from "./utilities/service";

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

export function listHistoryShopping() {
  console.log("hi");
  return MainApi.swot("b2c/portfolio/orders").json();

  //
}

export function listHistoryWidthdrawal() {
  return MainApiDbg.mainKy("b2c/withdrawals").json();
}

export function listPortfolio() {
  return MainApiDbg.mainKy("b2c/my_indices").json();
}

export function widthdrawalIndex(address) {
  return MainApiDbg.mainKy
    .post("b2c/withdrawals", { json: { address } })
    .json();
}

export function createOrder({ amount, inder_id }) {
  return MainApi.swot
    .post("b2c/portfolio/register-order", {
      json: { amount, inder_id, test: true },
    })
    .json();
}


export function balanceProfile(){
  return MainApi.swot('b2c/portfolio/balance').json()
}