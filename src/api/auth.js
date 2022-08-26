import { MainApi } from "./utilities/service";

export function login ({ email, password }) {
  return MainApi.mainKy
    .post("b2c/auth/tokens", {
      json: {
        email,
        password,
        name: "1",
      },
    })
    .json();
}

export function registr ({ cellphone, email, name }) {
  return MainApi.mainKy
    .post("b2c/auth/register", {
      json: { cellphone, email, name },
    })
    .json();
}

export function setPassword ({ email, password, verification_code }) {
  return MainApi.mainKy.post("b2c/auth/password", {
    headers: {
      Accept: "application/json",
    },
    json: {
      email,
      password,
      verification_code,
    },
  });
}

export function getVerifingCode ({ mail }) {
  return MainApi.mainKy.post("b2c/auth/resend-verification", {
    headers: {
      Accept: "application/json",
    },
    json: {
      mail,
    },
  });
}
