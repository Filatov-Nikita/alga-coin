import { Quasar } from "quasar";

function ta(opt, obj) {
  const lang = Quasar.lang.isoName.slice(0, 2);
  return obj?.l10n?.[lang]?.[opt];
}

export default {
  install(app) {
    app.config.globalProperties.$ta = ta;
  },
};
