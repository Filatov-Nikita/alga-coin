export default (store) => {
  return Promise.all([
    store.dispatch("profile/show"),
    
  ]);
};
