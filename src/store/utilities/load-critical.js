export default (store) => {
  console.log(store)
  return Promise.all([
    store.dispatch("profile/show"),
    
  ]);
};
