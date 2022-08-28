<template>
    <header>
      <nav class="nav">
        <div class="tw-container">
          <div class="nav__wrapper tw-flex tw-justify-between tw-items-center">
            <div class="nav__left tw-flex tw-gap-12 tw-items-center">
              <img :src="require('assets/images/logo-v3.svg')" alt="logo" />
              <span class="mob-n tw-cursor-pointer" @click="$router.push({name:'tokenomics'})">Tokenomics</span>
            </div>
            <div class="nav__right tw-flex tw-items-center">
              <div class="auth tw-flex tw-gap-2.5 tw-mr-7">
                <button class="mob-n button-border-light" @click="$router.push({ name: 'auth.login' })">
                  {{ t("dropdown.buttons.login") }}
                </button>
                <button class="mob-n button-border-light" @click="$router.push({ name: 'auth.registr' })">
                  {{ t("dropdown.buttons.register") }}
                </button>
              </div>
              <div class="local">
                <button @click="newLocale('en-US')" :class="locale === 'English' ? 'active' : ''">
                  <span>EN</span>
                </button>
                <button @click="newLocale('ru-RU')" :class="locale === 'Русский' ? 'active' : ''">
                  <span> RU </span>
                </button>
              </div>
              <div class="desk-n">
                <button class="burger" @click="toggleDrop">
                  <span></span><span></span><span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="drop" :class="dropDown ? 'active' : ''" id="dropdown">
        <div class="tw-container">
          <div class="drop__wrapper tw-flex tw-justify-between tw-gap-1">
            <button class="button-border tw-w-1/2" @click="$router.push({ name: 'profile' })">
              {{ t("dropdown.buttons.login") }}
            </button>
            <button class="button tw-w-1/2" @click="$router.push({ name: 'auth.registr' })">
              {{ t("dropdown.buttons.register") }}
            </button>
          </div>
        </div>
      </div>
      <div v-if=" $route.name === 'home'" class="tw-mt-7.5">
        <div class="tw-container">
          <div class="header-bg">
            <div class="header-bg__touch"></div>
            <div class="header-bg__wrapper">
              <div class=" tw-flex tw-flex-col tw-gap-5 xl:tw-self-center">
                <h1 class="header-bg__title">{{ t("header.title") }}</h1>
                <h2 v-html="t('header.subtitle')"></h2>
              </div>
              <!-- <div class="header-bg__img"></div> -->
              <div class="header-bg__img">
                <picture>
                  <source :srcset="require('assets/images/AA_1.png')" media="(min-width: 1100px)" />
                  <img :src="require('assets/images/AA_2@2x.png')" alt="" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  
</template>

<script>
import useLocal from "src/composition/V3/useLocal"
import {ref} from 'vue';
import { useI18n } from "vue-i18n";
const i18n = {
  messages: {
    "ru-RU": {
      dropdown: {
        buttons: {
          register: "Регистрация",
          login: "Авторизация",
          profile: "Профиль",
        },
      },
      header: {
        title: "Алга",
        subtitle: "Платформа <br> Индексных <br> Деривативов",
      },
      about: {
        title: "О нас",
        text: "ALGA — это совершенно новая платформа CeFi для реализации различных инвестиционных стратегий на основе индексных деривативов. <br> Лежащая в основе передовая технология наряду с огромным опытом основной команды в области торговли делает ALGA универсальным сервисом для инвестиций в проверенные и эффективные стратегии, облегчающие вход в криптовалюту для всех. Эти стратегии, основанные на индексных деривативах, состоящих из множества активов, подобранных в наиболее эффективном соотношении, позволяют получать солидный доход на вложенный капитал при минимизации рисков. <br> Платформа создана людьми для людей с единственной целью - обеспечить комфортное отслеживание активов и прозрачность транзакций, чтобы вывести опыт управления активами на совершенно новый уровень.",
      },
      indexD: {
        title: "Index Derivatives",
        card: {
          profitability: {
            1: "Прибыльность <br/> за {numb} месяцев",
            2: "Прибыльность <br/> за {numb} месяцев",
            3: "Прибыльность <br/> за {numb} месяцев",
            4: "Прибыльность <br/> за {numb} месяцев",
            5: "Прибыльность <br/> за {numb} месяцев",
            6: "Прибыльность <br/> за {numb} месяцев",
            7: "Прибыльность <br/> за {numb} месяцев",
            8: "Прибыльность <br/> за {numb} месяцев",
            9: "Прибыльность <br/> за {numb} месяцев",
            10: "Прибыльность <br/> за {numb} месяцев",
          },
        },
      },
      roadmap: {
        title: "Дорожная карта",
        stages: {
          1: {
            title: "Этап 1",
            subtitle: "Январь-Март, 2022",
            items: [
              "Разработка концепции и брендбука проекта",
              "Разработка архитектуры платформы",
              "Создание и наполнение сайта (дизайн, верстка, мобильная адаптация, разработка ядра учетной записи пользователя)",
            ],
          },
          2: {
            title: "Этап 2",
            subtitle: "Март-Май, 2022",
            items: [
              "Разработка платформы MVP",
              "Разработка маркетингового плана",
              "Создание и наполнение соцсетей (Facebook, Instagram, Telegram, Reddit)",
              "Старт предварительной маркетинговой кампании",
            ],
          },
          3: {
            title: "Этап 3",
            subtitle: "Май-Июль, 2022",
            items: [
              "Создание компании и получение юридических документов",
              "Начало сбора средств",
              "Открытие офисов: Дубай, Москва, Уфа, Казань",
              "Тестирование MVP и QA",
              "Завершение аудита безопасности платформы",
            ],
          },
          4: {
            title: "Этап 4",
            subtitle: "Июль-Сентябрь, 2022",
            items: [
              "Старт глобальной маркетинговой кампании",
              "Проведение IEO на CEX",
              "Листинг CEX",
              "Запуск платформы MVP",
            ],
          },
          5: {
            title: "Этап 5",
            subtitle: "Сентябрь-Ноябрь, 2022",
            items: [
              "Обновление функционала платформы",
              "Запуск программы индексов Alga Advisors",
              "Разработка мобильных приложений",
            ],
          },
          6: {
            title: "Этап 5",
            subtitle: "Ноябрь 2022-Фев 2023",
            items: [
              "Листинг на других централизованных биржах",
              "Разработка собственной индексной биржи",
              "Увеличение количества индексов до 15",
              "Партнерские соглашения с солидными хедж-фондами",
            ],
          },
        },
      },
      team: {
        title: "Team",
        peoples: {
          1: {
            name: "Урал",
            lastName: "Каразбаев",
            bio: "Основатель ALGA Ecosystem, предприниматель, основатель инвестиционного клуба «Музей финансов», соучредитель ТЦ «Город», «Форестпром», Д.С.Р. Уфа",
          },
          2: {
            name: "Данат",
            lastName: "Латыпов",
            bio: "Разработчик, кандидат экономических наук, математик. Руководитель группы разработки. Специализируется на разработке высоконагруженных систем и коммерческих блокчейн-проектов с 2017 года.",
          },
          3: {
            name: "Раст",
            lastName: "Пентагон",
            bio: "Основатель ALGA Ecosystem и торговый директор криптовалютного фонда Fakel в СНГ, основатель консалтинговой компании Take Profit, международный спикер, квалифицированный трейдер с опытом работы более 8 лет.",
          },
          4: {
            name: "Иван",
            lastName: "Белый",
            bio: "Основатель и генеральный директор криптовалютного фонда Fakel в СНГ, руководитель образовательной программы, квалифицированный трейдер и маркетолог с опытом работы более 10 лет",
          },
          5: {
            name: "Елена",
            lastName: "Шаханова",
            bio: "Бизнесмен, основатель и генеральный директор агентства цифрового брендинга YES IDEA, арт-директор российских и международных проектов",
          },
        },
      },
      backers: {
        title: "Спонсоры & Партнеры",
      },
      faq: {
        title: "FAQ",
        items: {
          1: {
            title: "Для чего используется WalletConnect?",
            text: "WalletConnect формирует соединения и переводит средства между децентрализованными кошельками и приложениями. Многие люди неправильно понимают WalletConnect как какой-то кошелек. Однако это не так. Некоторые из наиболее распространенных вариантов использования WalletConnect включают перевод средств на децентрализованные платформы для ставок, онлайн-казино, службы на основе DApp и т. д. <br> Следовательно, всякий раз, когда присутствует элемент транзакции, на сцену выходит WalletConnect. Значение WalletConnect заключается в зашифрованном соединении, которое он предлагает. Естественно, безопасность является главным приоритетом, когда речь идет о онлайн-транзакциях.",
          },
        },
      },
      "card-big": {
        signin: {
          title: "Создать",
          text: "По всем вопросам пишите нам и оператор свяжется с вами в ближайшее время",
          createButton: "Создать аккаунт",
        },
        anyquestion: {
          title: "Остались вопросы?",
          text: "По всем вопросам пишите нам и оператор свяжется с вами в ближайшее время",
          contacrusButton: "Свяжитесь с нами",
          joinButton: "Присоединяйтесь к нашему сообществу",
        },
      },
      other: {
        button: {
          buy: "Купить",
        },
      },
    },

    "en-US": {
      dropdown: {
        buttons: {
          register: "Registration",
          login: "Authorization",
          profile: "profile",
        },
      },
      header: {
        title: "Alga",
        subtitle: "Index <br> Derivatives <br> Platform",
      },
      about: {
        title: "About",
        text: "ALGA is a brand new CeFi platform for the implementation of different investment strategies based on index derivatives. <br> The underlying cutting edge technology along with a huge background of the core team in  trading makes ALGA the one-stop shop for investments into proven and efficient strategies facilitating entry to the crypto for everyone. These strategies based on index derivatives consisting of many assets selected in the most effective ratio allow to receive solid return on the allocated capital while minimizing risks. <br> The platform is designed by people for people with the only one goal - to ensure comfortable tracking of assets and transparent transactions in order to bring asset management experience to completely new level.",
      },
      indexD: {
        title: "Index Derivatives",
        card: {
          profitability: {
            1: "Profitability <br/> for {numb} months",
            2: "Profitability <br/> for {numb} months",
            3: "Profitability <br/> for {numb} months",
            4: "Profitability <br/> for {numb} months",
            5: "Profitability <br/> for {numb} months",
            6: "Profitability <br/> for {numb} months",
            7: "Profitability <br/> for {numb} months",
            8: "Profitability <br/> for {numb} months",
            9: "Profitability <br/> for {numb} months",
            10: "Profitability <br/> for {numb} months",
          },
        },
      },
      roadmap: {
        title: "Roadmap",
        stages: {
          1: {
            title: "Stage 1",
            subtitle: "January-March, 2022",
            items: [
              "Development of the concept and brand book of the project",
              "Platform architecture development",
              "Website creation and content (design, layout, mobile adaptation, development of the user account core)",
            ],
          },
          2: {
            title: "Stage 2",
            subtitle: "March-May, 2022",
            items: [
              "Development of platform MVP",
              "Development of the marketing plan",
              "Creation and content of socials (Facebook, Instagram, Telegram, Reddit)",
              "Start of the preliminary marketing campaign",
            ],
          },
          3: {
            title: "Stage 3",
            subtitle: "May-July, 2022",
            items: [
              "Company establishment and obtaining of legal documents",
              "Start of the fundraise",
              "Offices establishment: Dubai, Moscow, Ufa, Kazan",
              "MVP testing and QA",
              "Platform security audit completion",
            ],
          },
          4: {
            title: "Stage 4",
            subtitle: "July-September, 2022",
            items: [
              "Start of the global marketing campaign",
              "Conduction of IEO on CEX",
              "CEX listing",
              "Platform MVP launch",
            ],
          },
          5: {
            title: "Stage 5",
            subtitle: "September-November, 2022",
            items: [
              "Platform functionality update",
              "Launch of the Alga Advisors indexes program",
              "Mobile app development",
            ],
          },
          6: {
            title: "Stage 6",
            subtitle: "Nov 2022-Feb 2023",
            items: [
              "Listing on other Centralized exchanges",
              "Development of the own index exchange",
              "Increasing number of indexes to 15",
              "Partnership agreements with solid hedge-funds",
            ],
          },
        },
      },
      team: {
        title: "Team",
        peoples: {
          1: {
            name: "Ural",
            lastName: "Karazbaev",
            bio: "Founder of ALGA Ecosystem, entrepreneur, founder of Museum of Finance investment club, co-founder of TC Gorod, Forestprom, D.S.R. Ufa",
          },
          2: {
            name: "Danat",
            lastName: "Latypov",
            bio: "Developer, PhD in economics, mathematician. Head of development team. Specialized in development of high-load systems and commercial blockchain projects from 2017",
          },
          3: {
            name: "Rustem",
            lastName: "Sadreev",
            bio: "Founder and trading director of Fakel cryptocurrency fund in CIS, head of educational program, qualified trader with more than 8 years experience",
          },
          4: {
            name: "Ivan",
            lastName: "Beliy",
            bio: "Founder and CEO of Fakel cryptocurrency fund in CIS, head of educational program, qualified trader and marketer with more than 10 years experience",
          },
          5: {
            name: "Elena",
            lastName: "Shakhanova",
            bio: "Businessman, founder and CEO of YES IDEA digital branding agency, art director of Russian and international projects",
          },
        },
      },
      backers: {
        title: "Backers & Partners",
      },
      faq: {
        title: "FAQ",
        items: {
          1: {
            title: "What is WalletConnect used for?",
            text: "WalletConnect forms connections and transfers funds between decentralized wallets and applications. Many people misunderstand WalletConnect to be some wallet. However, that's not true. Some of the most common use cases of WalletConnect include transferring funds to decentralized betting platforms, online casinos, DApps based services, etc. <br> Hence, whenever there is an element of transaction involved, WalletConnect comes into the picture. The significance of WalletConnect is the encrypted connection that it offers. Naturally, security is the topmost priority when it comes to online transactions.",
          },
        },
      },
      "card-big": {
        signin: {
          title: "Sign up",
          text: "For all questions, write to us and the operator will contact you as soon as possible",
          createButton: "Create an account",
        },
        anyquestion: {
          title: "Any questions?",
          text: "For all questions, write to us and the operator will contact you as soon as possible",
          contacrusButton: "Contast us",
          joinButton: "Join our community",
        },
      },
      other: {
        button: {
          buy: "Buy",
        },
      },
    },
  },
};
export default {
    setup(){
        const dropDown = ref(false);
        const toggleDrop = () => {
            const element = document.querySelector("#dropdown");
            if (element) {
                if (element.style.maxHeight) {
                element.style.maxHeight = null;
                dropDown.value = false;
                } else {
                dropDown.value = true;
                element.style.maxHeight = element.scrollHeight + "px";
                }
            }
            };
        const {locale, newLocale} = useLocal();
        const { t } = useI18n(i18n);
        return {
            locale,
            newLocale,
            t,
            toggleDrop,
            dropDown,
        }
    }
}
</script>

<style lang="scss" scoped>
.button-border {
  border: 1px solid #ffffff;
  backdrop-filter: blur(7px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 8px;
  min-height: 60px;
  padding-right: 22.05px;
  padding-left: 22.05px;
}
.button-border-light {
  border: 1px solid #333653;
  /* Note: backdrop-filter has minimal browser support */
  font-size: 14px;
  line-height: 130%;
  border-radius: 6px;
  min-height: 40px;
  padding-right: 24px;
  padding-left: 24px;
}
.button {
  background: linear-gradient(180deg, #4ad66d 0%, #04ac2e 100%);
  padding-right: 22.05px;
  padding-left: 22.05px;
  border-radius: 12px;
  min-height: 60px;
  padding: 20px;
  font-size: 1rem;
  line-height: 19px;
}
.burger {
  margin-left: 24px;
  background: #101333;
  border: 4px solid #333653;
  box-shadow: 0px 155px 62px rgba(1, 3, 24, 0.01),
    0px 87px 52px rgba(1, 3, 24, 0.05), 0px 39px 39px rgba(1, 3, 24, 0.09),
    0px 10px 21px rgba(1, 3, 24, 0.1), 0px 0px 0px rgba(1, 3, 24, 0.1);
  border-radius: 14px;
  width: 50px;
  height: 50px;
  padding: 11px 9px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  & > span {
    background-color: #fff;
    height: 3px;
    width: 100%;
    border-radius: 14px;
  }
}
.drop {
  position: absolute;
  z-index: 1;
  width: 100%;
  filter: drop-shadow(0px 153px 61px rgba(4, 8, 47, 0.01))
    drop-shadow(0px 86px 51px rgba(4, 8, 47, 0.05))
    drop-shadow(0px 38px 38px rgba(4, 8, 47, 0.09))
    drop-shadow(0px 10px 21px rgba(4, 8, 47, 0.1))
    drop-shadow(0px 0px 0px rgba(4, 8, 47, 0.1));

  background: rgba(20, 23, 52, 0.112);
  box-shadow: inset 1.86559px -1.86559px 1.86559px rgba(40, 48, 121, 0.424);

  backdrop-filter: blur(30.4091px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 0 0 24px 24px;
  max-height: 0;
  transition: all 0.3s ease;
  overflow: hidden;

  &__wrapper {
    padding: 35px 0;
  }
}
.nav {
  background-color: #101333;
  &__wrapper {
    min-height: 80px;
    height: 100%;
  }
}
.header-bg {
  background: radial-gradient(ellipse, #0f1359, #000320);
  // height: 500px;

  border-radius: 36px;
  position: relative;
  overflow: hidden;
  &__wrapper {
    padding: 40px 25px 0 25px;
    @media screen and (min-width: 1200px) {
      padding-top: 0;
      padding-left: 80px;
      display: flex;
      justify-content: space-between;
    }
  }
  &__touch {
    position: absolute;
    width: 100%;
    height: 100%;
    mix-blend-mode: luminosity;
    background: url('/src/asset/icons/touch.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 300%;
  }
  &__title {
    font-weight: 500;
    font-size: 96px;
    line-height: 90%;
    /* or 86px */
        text-transform: uppercase;
    letter-spacing: -0.01em;

    /* Main Gradient */

    background: linear-gradient(180deg, #4ad66d 0%, #04ac2e 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  &__img {
    mix-blend-mode: luminosity;
    margin-right: -25px;
    @media screen and (min-width: 1200px) {
      width: 50%;
    }
    & > picture > img {
      margin-right: 0;
      margin-left: auto;
    }
    // position: absolute;
    // background: url(./img/AA_2@2x.png);
    // background-repeat: no-repeat;
    // background-position: right center;
    // background-size: 100%;
    // height: 100%;
  }
}
</style>