import { testApi, MainApi } from "./utilities/service";

export function showWallet() {
  return MainApi.swot("b2c/wallet").json();
}

export function show() {
  return testApi.swot("wallet.json").json();
}

export function create(json) {
  return MainApi.swot.post("b2c/wallet/refills/crypto", { body:json, headers: {
		'Content-Type': 'application/json'
	 } }).json();
}

export function createFiat(json) {
  return MainApi.swot.post("b2c/wallet/refills/fiat", { body:json, headers: {
		'Content-Type': 'application/json'
	 } }).json();
}