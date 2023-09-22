import { Quasar } from "quasar";
import { createI18n } from "vue-i18n";
import messages from "src/i18n";
import api, { MainApi, testApi } from "src/api/utilities/service";
import { configure } from "vee-validate";
import { localize, setLocale as VeeSetLocale } from "@vee-validate/i18n";
import ru from "@vee-validate/i18n/dist/locale/ru.json";
import en from "@vee-validate/i18n/dist/locale/en.json";
import de from "@vee-validate/i18n/dist/locale/de.json";
import zh from "@vee-validate/i18n/dist/locale/zh_CN.json";

export default ({ app }) => {
  let curLocale;
  if (window.localStorage.getItem("locale") === null) {
    // curLocale = Quasar.lang.getLocale();
    curLocale = "en-US";
    // curLocale = "zh-CN";
    if (curLocale.indexOf("en") === 0) curLocale = "en-US";
  } else {
    curLocale = window.localStorage.getItem("locale");
  }
  function customRule(choice, choicesLength, orgRule) {
    if (choice === 0) {
      return 0;
    }

    const teen = choice > 10 && choice < 20;
    const endsWithOne = choice % 10 === 1;
    if (!teen && endsWithOne) {
      return 1;
    }
    if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
      return 2;
    }

    return choicesLength < 4 ? 2 : 3;
  }
  const i18n = createI18n({
    locale: curLocale,
    legacy: false,
    globalInjection: true,
    warnHtmlMessage: false,
    messages,
    fallbackLocale: "en-US",
    pluralizationRules: {
      "ru-RU": customRule,
    },
    pluralRules: {
      "ru-RU": customRule,
    },
  });

  app.use(i18n);
  // app.use(i18Gl);

  // создает сообщения для правил на русском
  Object.assign(ru.messages, {
    password: "Пароль должен быть больше 6 знаков",
    confirmed: "Пароли не совпадают",
    walletAddress: "Адреса кошелька должен иметь 40 символов",
    cellphone: "Номер телефона введен некорректно",
    min: "Сумма должна превышать 100 USDT",
  });

  Object.assign(en.messages, {
    password: "Password must be more 6 characters",
    confirmed: "Password mismatch",
    walletAddress: "Wallet address must be 40 chars",
    cellphone: "Phone number entered incorrectly",
    min: "The sum must exceed 100 USDT",
  });

  Object.assign(de.messages, {
    password: "Das Passwort muss mehr als 6 Zeichen lang sein",
    confirmed: "Passwörter stimmen nicht überein",
    walletAddress: "Die Adresse der Wallets muss 40 Zeichen lang sein.",
    cellphone: "Falsch eingegebene Handynummer",
    min: "Der Betrag muss mehr als 100 USDT betragen.",
  });
  Object.assign(zh.messages, {
    password: "密码必须多于 6 个字符",
    confirmed: "密码不匹配",
    walletAddress: "钱包地址必须是 40 个字符",
    cellphone: "电话号码输入错误",
    min: "总金额必须超过 100 USDT",
  });

  configure({
    generateMessage: localize({
      ru,
      en,
      de,
      zh,
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
