export default (store) => {
  return Promise.all([
    store.dispatch("profile/show"),
    // store.dispatch("wallet/show"),
  ]);
};
