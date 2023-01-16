<template>
  <header>
    <nav class="nav">
      <div class="tw-container">
        <div class="nav__wrapper tw-flex tw-justify-between tw-items-center">
          <div class="nav__left tw-flex tw-gap-12 tw-items-center">
            <img
              :src="require('assets/images/logo-v3.svg')"
              alt="logo"
              class="tw-cursor-pointer"
              @click="$router.push({ name: 'home' })"
            />
            <span
              class="mob-n tw-cursor-pointer"
              @click="$router.push({ name: 'tokenomics' })"
              >{{ t("tokenomic-title") }}</span
            >
          </div>
          <div class="nav__right tw-flex tw-items-center">
            <div class="auth tw-flex tw-gap-2.5 tw-mr-7">
              <!-- <button class="mob-n button-border-light" @click="$router.push({ name: 'auth.login' })">
                  {{ t("dropdown.buttons.login") }}
                </button> -->
              <button
                v-if="isAuth"
                class="mob-n button-border-light"
                @click="$router.push({ name: 'index-directive' })"
              >
                {{ t("lk") }}
              </button>
              <button
                v-else
                class="mob-n button-border-light"
                @click="$router.push({ name: 'auth.registr' })"
              >
                {{ t("dropdown.buttons.register") }}
              </button>
            </div>
            <Locale />
            <!-- <div class="local">
              <button
                @click="newLocale('ru-RU')"
                :class="locale === 'Русский' ? 'active' : ''"
              >
                <span>RU</span>
              </button>
              <button
                @click="newLocale('en-US')"
                :class="locale === 'English' ? 'active' : ''"
              >
                <span>EN </span>
              </button>
            </div> -->
            <div class="desk-n">
              <button class="burger" @click="dropDown = !dropDown">
                <span></span><span></span><span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div>
      <transition
        appear
        mode="out-in"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div class="drop" v-if="dropDown">
          <div class="tw-container">
            <div class="drop__wrapper tw-flex tw-justify-between tw-gap-1">
              <!-- <button class="button-border tw-w-1/2" @click="$router.push({ name: 'profile' })">
                    {{ t("dropdown.buttons.login") }}
                  </button> -->
              <button
                v-if="isAuth"
                class="button tw-w-full tw-relative tw-z-10"
                @click="$router.push({ name: 'index-directive' })"
              >
                {{ t("lk") }}
              </button>
              <button
                v-else
                class="button tw-w-full tw-relative tw-z-10"
                @click="$router.push({ name: 'auth.registr' })"
              >
                {{ t("dropdown.buttons.register") }}
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div v-if="$route.name === 'home'" class="tw-mt-7.5">
      <div class="tw-container">
        <div class="header-bg">
          <div class="header-bg__touch"></div>
          <div class="header-bg__wrapper">
            <div class="tw-flex tw-flex-col tw-gap-5 xl:tw-self-center">
              <h1 class="header-bg__title">{{ t("header.title") }}</h1>
              <h2 v-html="t('header.subtitle')"></h2>
            </div>
            <!-- <div class="header-bg__img"></div> -->
            <div class="header-bg__img">
              <picture>
                <source
                  :srcset="require('assets/images/AA_1.png')"
                  media="(min-width: 1100px)"
                />
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
import Locale from "src/components/V3/LocaleButtons.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
const i18n = {
  messages: {
    "ru-RU": {
      lk: "Личный кабинет",
      "tokenomic-title": "Токеномика",
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
    },

    "en-US": {
      lk: "Personal",
      "tokenomic-title": "Tokenomics",
      dropdown: {
        buttons: {
          register: "Sign Up",
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
        text: "ALGA is a brand new CeFi platform for the implementation of different investment strategies based on index derivatives. <br> The underlying cutting edge technology along with a huge background of the core team in  trading makes ALGA the one-stop shop for investments into proven and efficient strategies facilitating entry to the crypto for everyone. These strategies based on index derivatives consisting of many assets selected with the most efficient ratio allow to receive solid return on the allocated capital while minimizing risks. <br> The platform is designed by the people for the people with only one goal - to ensure comfortable tracking of assets and transparent transactions in order to bring asset management experience to a completely new level.",
      },
    },
    "zh-CN": {
      lk: "个人的",
      "tokenomic-title": "代币经济学",
      dropdown: {
        buttons: {
          register: "报名",
          login: "授权",
          profile: "轮廓",
        },
      },
      header: {
        title: "藻类",
        subtitle: "指数 <br> 衍生品 <br> 平台",
      },
      about: {
        title: "关于",
        text: "ALGA是一个全新的CeFi平台，用于实施基于指数衍生品的不同投资策略。 <br> 底层的尖端技术以及交易核心团队的庞大背景使 ALGA 成为投资于成熟且有效的策略的一站式商店，从而促进每个人进入加密货币。 这些基于指数衍生品的策略由许多以最有效比率选择的资产组成，可以在将风险降至最低的同时，从分配的资本中获得可观的回报。 <br> 该平台是为人们设计的，只有一个目标——确保资产的舒适跟踪和透明的交易，从而将资产管理体验提升到全新的水平",
      },
    },
    de: {
      lk: "Persönlich",
      "tokenomic-title": "Tokenomik",
      dropdown: {
        buttons: {
          register: "Anmeldung",
          login: "Genehmigung",
          profile: "profil",
        },
      },
      header: {
        title: "Alge",
        subtitle: "Index <br> Derivate <br> Plattform",
      },
      about: {
        title: "Um",
        text: "ALGA ist eine brandneue CeFi-Plattform zur Umsetzung verschiedener Anlagestrategien auf Basis von Indexderivaten. <br> Die zugrunde liegende Spitzentechnologie zusammen mit einem enormen Hintergrund des Kernteams im Handel macht ALGA zum One-Stop-Shop für Investitionen in bewährte und effiziente Strategien, die den Einstieg in die Krypto für jedermann erleichtern. Diese auf Indexderivaten basierenden Strategien, die aus vielen im effektivsten Verhältnis ausgewählten Vermögenswerten bestehen, ermöglichen es, eine solide Rendite auf das zugewiesene Kapital zu erzielen und gleichzeitig die Risiken zu minimieren. <br> Die Plattform wurde von Menschen für Menschen mit dem einzigen Ziel entwickelt – eine komfortable Verfolgung von Vermögenswerten und transparente Transaktionen zu gewährleisten, um die Vermögensverwaltungserfahrung auf ein völlig neues Niveau zu bringen.",
      },
    },
  },
};
export default {
  components: {
    Locale,
  },
  setup() {
    const store = useStore();
    const dropDown = ref(false);
    // const toggleDrop = () => {
    //   const element = document.querySelector("#dropdown");
    //   if (element) {
    //     if (element.style.maxHeight) {
    //       element.style.maxHeight = null;
    //       dropDown.value = false;
    //     } else {
    //       dropDown.value = true;
    //       element.style.maxHeight = element.scrollHeight + "px";
    //     }
    //   }
    // };

    const { t } = useI18n(i18n);

    return {
      t,
      // toggleDrop,
      dropDown,
      isAuth: computed(() => store.getters["auth/isAuth"]),
    };
  },
};
</script>
<style lang="scss">
.drop {
  position: absolute;
  z-index: 1;
  width: 100%;

  background: rgba(20, 23, 52, 0.112);
  box-shadow: inset 1.86559px -1.86559px 1.86559px rgba(40, 48, 121, 0.424);

  backdrop-filter: blur(30.4091px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 0 0 24px 24px;
  transition: all 0.3s ease;
  overflow: hidden;

  &__wrapper {
    padding: 35px 0;
  }
}
</style>
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
    background: url("src/assets/icons/touch.svg");
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
