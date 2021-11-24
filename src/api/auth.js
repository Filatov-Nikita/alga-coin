import api from "./utilities/service";
import { CLIEND_ID, CLIENT_SECRET } from "src/env";

export function login({ cellphone, password }) {
  return api.mainKy
    .post('b2c/tokens', {
      json: {
        username: cellphone,
        password: password,
        client_id: CLIEND_ID,
        client_secret: CLIENT_SECRET,
        grant_type: "password",
      },
    })
    .json();
}

export function updateTokens(refreshToken) {
  return api.mainKy
    .post("b2c/auth/token", {
      json: {
        client_id: CLIEND_ID,
        client_secret: CLIENT_SECRET,
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      },
    })
    .json();
}
