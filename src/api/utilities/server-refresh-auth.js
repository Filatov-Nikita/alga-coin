import ky from "ky";
import * as Tokens from "./tokens";

export default class ServiceApi {
  constructor(domain, opts) {
    this.domain = domain;
    this.opts = opts;
    this.tokenName = opts.tokenName;
    this.refreshFetcher = undefined;
    this.handleRejectionToken = undefined;
    this.mainKy = this.createMain();
    this.swot = this.createSWOT();
  }

  createMain() {
    return ky.create({
      prefixUrl: `${this.domain}/${this.opts.apiPath}`,
      timeout: this.opts.timeout,
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
            try {
              if (response.status !== 401) return;

              const refreshToken = Tokens.getRefreshToken();

              if (refreshToken === null) {
                throw "refresh token is null";
              }

              const newTokens = await this.refreshFetcher(
                this.mainKy,
                refreshToken
              );

              Tokens.setTokensData(
                newTokens.access_token,
                newTokens.refresh_token
              );

              this.setTokenToReq(request);

              return ky(request);
            } catch (e) {
              return this.handleRejectionToken();
            }
          },
        ],
      },
    });
  }

  registrRefreshFetcher(fetcher) {
    this.refreshFetcher = fetcher;
  }

  setTokenToReq(request, accessToken) {
    request.headers.set("Authorization", "Bearer " + accessToken);
  }

  registrHandleRejectionToken(handler) {
    this.handleRejectionToken = handler;
  }
}
