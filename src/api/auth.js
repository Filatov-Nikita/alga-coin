import { MainApi } from "./utilities/service";

export function login({ email, password }) {
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

export function registr({ cellphone, email, name }) {
  return MainApi.mainKy
    .post("b2c/auth/register", {
      json: { cellphone, email, name },
    })
    .json();
}

export function setPassword({ email, password, verification_code }) {
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

export function getVerifingCode({ mail }) {
  return MainApi.mainKy.post("b2c/auth/resend-verification", {
    headers: {
      Accept: "application/json",
    },
    json: {
      email: mail,
    },
  });
}

export function setNewPassword({ new_password, old_password }) {
  return MainApi.swot
    .put("b2c/profile/password", {
      json: { new_password, old_password },
    })
    .json();
}

export function setNewPhone({ cellphone, name }) {
  return MainApi.swot
    .patch("b2c/profile", {
      json: { cellphone, name },
    })
    .json();
}
