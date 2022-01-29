import { Quasar } from "quasar";
import { createI18n } from "vue-i18n";
import messages from "src/i18n";
import api, { MainApi, testApi } from "src/api/utilities/service";
import { configure } from "vee-validate";
import { localize, setLocale as VeeSetLocale } from "@vee-validate/i18n";
import ru from "@vee-validate/i18n/dist/locale/ru.json";
import en from "@vee-validate/i18n/dist/locale/en.json";

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
    legacy: false,
    globalInjection: true,
    warnHtmlMessage: false,
    messages,
    fallbackLocale: "ru-RU",
  });

  app.use(i18n);

  // создает сообщения для правил на русском
  Object.assign(ru.messages, {
    password: "Пароль должен быть больше 6 знаков",
    confirmed: "Пароли не совпадают",
    walletAddress: "Проверьте правильность ввода адреса кошелька",
    cellphone: "Номер телефона введен некорректно",
  });

  Object.assign(en.messages, {
    password: "Password must be more 6 characters",
    confirmed: "Password mismatch",
    walletAddress: "Check if the wallet address is entered correctly",
    cellphone: "Phone number entered incorrectly",
  });

  console.log(ru);

  configure({
    generateMessage: localize({
      ru,
      en,
    }),
  });

  setLocale(curLocale);

  app.config.globalProperties.$setLocale = setLocale;

  if (!window.app) window.app = {};
  window.app.setLocale = setLocale;

  function setLocale(lang, reload = false) {
    i18n.locale = lang;
    window.localStorage.setItem("locale", lang);

    const serverLocale = lang.slice(0, 2);

    VeeSetLocale(serverLocale);
    api.setLang(serverLocale);
    MainApi.setLang(serverLocale);
    testApi.setLang(serverLocale);

    if (reload) window.location.reload();
  }
};
