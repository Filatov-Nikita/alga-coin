export default {
  install(app) {
    app.config.globalProperties.$copy = (text) => {
      navigator.clipboard.writeText(text);
    };
  },
};
