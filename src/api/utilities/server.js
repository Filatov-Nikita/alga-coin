import ky from "ky";
import * as Tokens from "./tokens";

export default class ServiceApi {
  constructor(domain, opts) {
    this.lang = "ru";
    this.domain = domain;
    this.opts = opts;
    this.tokenName = opts.tokenName;
    this.handleRejectionToken = undefined;
    this.mainKy = this.createMain();
    this.swot = this.createSWOT();
  }

  createMain() {
    return ky.create({
      prefixUrl: `${this.domain}/${this.opts.apiPath}`,
      timeout: this.opts.timeout,
      hooks: {
        beforeRequest: [
          (request) => {
            if (this.lang) request.headers.set("Accept-Language", this.lang);
          },
        ],
      },
    });
  }

  createSWOT() {
    return this.mainKy.extend({
      hooks: {
        beforeRequest: [
          (request) => {
            const accessToken = Tokens.getAccessToken();
            if (accessToken !== null) {
              this.setTokenToReq(request, accessToken);
            }
          },
        ],
        afterResponse: [
          async (request, options, response) => {
            if (response.status === 401) return this.handleRejectionToken();
          },
        ],
      },
    });
  }

  setTokenToReq(request, accessToken) {
    request.headers.set("Authorization", "Bearer " + accessToken);
  }

  registrHandleRejectionToken(handler) {
    this.handleRejectionToken = handler;
  }

  setLang(langName) {
    this.lang = langName;
  }
}
