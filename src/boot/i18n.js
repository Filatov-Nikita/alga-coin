import { Quasar } from "quasar";
import { createI18n } from "vue-i18n";
import messages from "src/i18n";
import api, { MainApi, testApi } from "src/api/utilities/service";

export default ({ app }) => {
  let curLocale;

  if (window.localStorage.getItem("locale") === null) {
    curLocale = Quasar.lang.getLocale();
    if (curLocale.indexOf("en") === 0) curLocale = "en-US";
  } else {
    curLocale = window.localStorage.getItem("locale");
  }

  const i18n = createI18n({
    locale: curLocale,
    fallbackLocale: "ru-RU",
    messages,
  });

  app.use(i18n);

  setLocale(curLocale);

  app.config.globalProperties.$setLocale = setLocale;
  window.setLocale = setLocale;

  function setLocale(lang, reload = false) {
    i18n.global.locale = lang;
    window.localStorage.setItem("locale", lang);

    const serverLocale = lang.slice(0, 2);
    api.setLang(serverLocale);
    MainApi.setLang(serverLocale);
    testApi.setLang(serverLocale);

    if (reload) window.location.reload();
  }
};
