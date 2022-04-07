export default {
  term: "Я ознакомился(ась) и соглашаюсь с {link} AlgaCoin",
  passRequired:
    "Пароль должен быть на английском языке и содержать не менее 6-и символов",
  errors: {
    code: "Вы ввели неверно код на предыдущем шаге. Введите код в это поле и повторите попытку.",
    convert: 'Не удалось конвертировать валюту. Попрбуйте ввести значение еще раз.'
  },
  alerts: {
    copy: "{msg} скопирован в буфер обмена | {msg} скопирована в буфер обмена",
  },
  actions: {
    buy: "Купить",
    send: "Отправить",
    back: "Назад",
    logout: "Выйти",
    getCode: "Получить звонок",
    toLK: "Вход в личный кабинет",
    hasAccount: "Уже зарегистрированы? {login}",
    setPass: "Установить и войти",
  },
  buttons: {
    close: "Закрыть",
    logIn: "Войти",
    registr: "Зарегистрироваться",
    resetPass: "Забыли пароль?",
  },
  inputs: {
    cellphone: "Телефон",
    password: "Пароль",
    newPass: "Повторите пароль",
    oldPass: "Новый пароль",
    repeatPass: "Повторите пароль",
    wrongCode: "Введите правильный код",
    // code: "Код из смс",
    code: '',
    wallet: "Адрес кошелька",
    walletReciever: "Адрес кошелька получателя",
    name: {
      label: "ФИО",
      placeholder: "Иванов Иван Иванович",
    },
  },
  lk: {
    menu: {
      wallet: "Кошелек",
      history: "История операций",
      output: "Вывод",
      polls: 'Опросы'
    },
  },
  landing: {
    header: {
      auth: "Авторизоваться",
      registr: "Зарегистрироваться",
      promoText: "Законные безусловные <br /> глобальные активы",
      lk: "Личный кабинет",
      logout: "Выйти",
    },
    footer: {
      serviceInfo: "Пользовательское соглашение",
      serviceInfoFile: "/serviceInfoRu.pdf",
      whyAlga: "Почему Alga",
      whyAlgaFile: "/disclaimerRu.pdf",
      roadmapFile : "/roadmapRu.pdf",
      whitePaper: "/whitePaperRu.pdf",
      algaMarket: "Alga Market в разработке",
    },
    menu: {
      about: "О токене",
      features: "Фишки проекта",
      owners: "Резиденты",
      ecosystem: "Экосистема",
      projects: "Проекты",
      news: "Новости",
    },
    about: {
      header: "О ТОКЕНЕ",
      body: "AlgaCoin — это токен, управляемый сообществом со множеством будущих проектов и партнёрств, направленный на повышение уровня жизни участников сообщества путём создания экологичных бизнес-проектов",
      bottom: "монет",
      wallets: "кошельков",
    },
  },
  globalErrors: {
    timeout: "Время ожидания запроса истекло. Повторите запрос еще раз.",
    401: "Для совершения действия необходимо авторизоваться.",
    403: "Недостаточно прав для совершения действия.",
    404: "Неудалось найти запрашиваемый ресурс",
    429: "Вы сделали слишком много попыток. Надо немного подождать.",
    500: "На сервере пошло что-то не так, возможно скоро все исправят. Если проблема не исчезнет, напишите об этом нам.",
  },
};
