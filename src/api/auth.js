import { MainApi } from "./utilities/service";

export function login({ cellphone, password }) {
  return MainApi.mainKy
    .post("b2c/auth/tokens", {
      json: {
        cellphone,
        password,
        name: "1",
      },
    })
    .json();
}

export function registr({ cellphone, email, name }) {
  return MainApi.mainKy
    .post("b2c/auth/register", {
      json: { cellphone, email, name },
    })
    .json();
}

export function setPassword({ cellphone, password, verification_code }) {
  return MainApi.mainKy.post("b2c/auth/password", {
    headers: {
      Accept: "application/json",
    },
    json: {
      cellphone,
      password,
      verification_code,
    },
  });
}

export function getVerifingCode({ cellphone }) {
  return MainApi.mainKy.post("b2c/auth/resend-verification", {
    headers: {
      Accept: "application/json",
    },
    json: {
      cellphone,
    },
  });
}
