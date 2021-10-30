// чтобы другие вызовы start не отменяли stop, который не ожидает чтобы его отменили из вне
let stopedName;

export default {
  install(app) {
    app.config.globalProperties.$scroll = {
      stop(name) {
        document.body.style.overflow = "hidden";
        if (!stopedName) stopedName = name;
      },
      start(name) {
        if (stopedName !== name) return;
        document.body.style.overflow = "";
        stopedName = "";
      },
    };
  },
};
