import { getAccessToken } from "src/api/utilities/tokens";
import loadCritical from "src/store/utilities/load-critical";

export default async ({ store }) => {
  if (!getAccessToken()) return;
  await loadCritical(store);
};
