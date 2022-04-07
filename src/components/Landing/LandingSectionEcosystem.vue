<template>
  <AppFullPageScreen
    name="ecosystem"
    class="tw-py-3 tw-relative landing-h-center"
    :class="{ ecosystem: $q.screen.lt.xl }"
  >
    <h2 v-if="$q.screen.lt.xl" class="tw-text-md2 tw-text-center tw-mb-8">
      {{ t("mHeader") }}
    </h2>
    <h2
      v-else
      class="landing-h2 landing-h2--space"
      :style="{ color: themes[theme] }"
    >
      {{ t("header") }}
    </h2>

    <div
      class="tw-flex tw-justify-between landing-c-up"
      :class="{ 'tw-flex-grow': $q.screen.lt.xl }"
    >
      <div></div>
      <AppCarousel
        :height="$q.screen.lt.xl ? '75%' : '370px'"
        class="eco-slider"
        :modelValue="$store.state.landing.curEco"
        @update:modelValue="$store.commit('landing/setEco', $event)"
      >
        <AppCarouselSlide
          v-for="item in items"
          :key="item.name"
          :name="item.name"
          :style="
            $q.screen.lt.xl
              ? { 'background-image': `url(/icons/${item.theme}.svg)` }
              : ''
          "
          class="tw-pb-7 tw-pt-16 tw-px-5 tw-rounded-base"
          :class="{ card: $q.screen.lt.xl }"
          @enter="changeTheme(item.theme, item.screenBg)"
        >
          <div :class="{ 'top-card': $q.screen.lt.xl }"></div>
          <div class="tw-mb-2-1 xl:tw-flex">
            <LandingLogo
              width="88px"
              height="84px"
              class="tw-mx-auto xl:tw-mx-0 tw-mb-3-1"
              :fill="item.logoColor"
            />
            <div class="xl:tw-ml-7-1">
              <InlineSvg
                class="tw-mx-auto xl:tw-mx-0"
                :src="require('assets/images/alga-vector.svg')"
              />
              <h3
                v-if="$q.screen.xl"
                class="tw-font-medium tw-text-xs tw-tracking-widest tw-mt-2"
              >
                {{ item.subtitle }}
              </h3>
            </div>
          </div>
          <article class="tw-text-center xl:tw-text-left">
            <template v-if="$q.screen.lt.xl">
              <h3
                class="tw-font-medium tw-text-xxs-1 tw-mb-4-1 tw-tracking-widest"
              >
                {{ item.subtitle }}
              </h3>
              <p
                class="text-lette-s tw-text-xxs-1 tw-mb-2"
                :style="{ color: colorList[item.name] }"
              >
                О НАПРАВЛЕНИИ
              </p>
            </template>
            <p class="tw-text-xs xl:tw-text-sm">{{ item.text }}</p>
          </article>
        </AppCarouselSlide>
      </AppCarousel>

      <div class="landing-eco-right" v-if="$q.screen.xl">
        <button
          class="landing-icon-cover"
          v-for="item in items"
          :key="item.name"
          @click="$store.commit('landing/setEco', item.name)"
        >
          <InlineSvg
            :src="item.icon"
            :fill="
              $store.state.landing.curEco === item.name
                ? colorList[item.name]
                : '#0A1E3E'
            "
            class="tw-mx-auto"
            :class="{
              'tw-opacity-40': $store.state.landing.curEco !== item.name,
            }"
          />
        </button>
      </div>
    </div>
  </AppFullPageScreen>
</template>

<script>
import { inject } from "vue";
import LandingLogo from "./LandingLogo.vue";
import { useI18n } from "vue-i18n";
import { colorIconList } from "src/helper/colorIconList";
const i18n = {
  messages: {
    "ru-RU": {
      mHeader: "Экосистема",
      header: "ЭКОСИСТЕМА",
      banking:
        "Благотворительный фонд, формируемый из комиссионных отчислений за покупку, обмен и продажу токенов ALGA.",
      consulting:
        "Объёмный модуль экспертных данных, создающий разумные производственные процессы для бизнеса, объединяющий технологию искусственного интеллекта, данные и аналитику. Alga Consulting — это возможность модернизировать рабочие процессы, технологии и компанию в целом для достижения впечатляющих бизнес-результатов",
      development:
        "Цифровая инвестиционная платформа, основанная на традиционных инструментах инвестирования в недвижимость. Держатели активов ALGA могут проводить аудит проектов, инвестировать в строительство объектов недвижимости, контролировать риски, беспрепятственно торговать правами собственности на объекты",
      ecology:
        "Использование возможностей Alga Ecosystem для более устойчивого и бережного управления природными ресурсами планеты",
      health:
        "Онлайн-консультации с ведущими специалистами мира и разработка противовирусных препаратов",
      invest:
        "стартовая инвестиционная площадка для подготовки и реализации новых, инновационных и экологических проектов по всему миру. Cоздание, покупка/продажа, хранение, безопасная защита и финансовое управление цифровыми активами (виртуальные товары и валюты), которые обслуживают экосистему ALGA.",
      market:
        "Торговая площадка для покупки, продажи и управления сетевыми и физическими активами участниками сообщества",
      starlink:
        "Проект по формированию собственной системы обеспечения независимого доступа к высокоскоростному Интернету и мобильной связи",
      edu: "Децентрализованная экосистема онлайн-обучения",
      nft: "Платформа для создателей произведений искусств, нацеленная на создание новой креативной экономики. Alga NFT — это маркетплейс современного искусства нового поколения",
    },
    "en-US": {
      mHeader: "Ecosystem",
      header: "ECOSYSTEM",
      banking:
        "A charitable foundation formed from commission payments for the purchase, exchange and sale of ALGA tokens.",
      consulting:
        "Is a voluminous module of expert data that will create reasonable production processes for business, combining artificial intelligence technology, data and analytics. This module can help you modernize your workflows, technologies, and the company as a whole to deliver impressive business results.",
      development:
        "Is a digital investment platform based on traditional real estate investment tools. ALGA asset holders can audit projects, invest in the construction of real estate, control risks, and freely trade property rights to objects.",
      ecology:
        "Leveraging the capabilities of ALGA ecosystem to manage the planet's natural resources more sustainably and lean.",
      health: "Is the development of IT projects in the field of medicine",
      invest:
        "Is a launching investment platform for the preparation and implementation of new, innovative and environmental projects around the world.Create, buy/sell, store, secure security and financial management of digital assets (virtual goods and currencies), as well as all business areas that serve the ecosystem of the metaverse ALGA.",
      market:
        "Is a trading platform for buying, selling and managing network and physical assets of community members",
      starlink:
        "Is a project to create its own system for providing independent access to high-speed Internet and mobile communications.",
      edu: "Is a decentralized online learning ecosystem",
      nft: "Is a platform for creators of works of art aimed at creating a new creative economy. NFT marketplace is a new generation of contemporary art.",
    },
  },
};

import { computed } from "vue";

export default {
  setup() {
    const theme = inject("theme");
    const themes = inject("themes");
    const switchTheme = inject("switchTheme");
    const updateBg = inject("updateBg");
    const updateTheme = inject("updateTheme");
    const { t } = useI18n(i18n);
    const items = computed(() => getItems(t));

    const changeTheme = (themeName, bgName) => {
      setTimeout(() => {
        switchTheme(themeName);
        updateBg(bgName);
        updateTheme(themeName);
      }, 0);
    };

    return {
      theme,
      themes,
      items,
      changeTheme,
      t,
      colorList: colorIconList,
    };
  },
  components: {
    LandingLogo,
  },
};

function getItems(t) {
  return [
    {
      name: "BANKING",
      subtitle: "HELP",
      text: t("banking"),
      fill: "linear-gradient(149.13deg, #156AEB 0.09%, #0D3B81 55.25%, #156AEB 100%)",
      logoColor: "blue",
      theme: "blue",
      screenBg: "blue",
      icon: require("assets/icons/eco-bank.svg"),
    },
    {
      name: "CONSULTING",
      subtitle: "CONSULTING",
      text: t("consulting"),
      fill: "linear-gradient(149.13deg, #0A1E3E 0.09%, #1D4786 55.25%, #0A1E3E 100%)",
      logoColor: "dark-blue",
      theme: "darkBlue",
      screenBg: "dark-blue",
      icon: require("assets/icons/eco-case.svg"),
    },
    {
      name: "DEVELOPMENT",
      subtitle: "DEVELOPMENT",
      text: t("development"),
      fill: "linear-gradient(150.99deg, #0A1E3E 0.09%, #EE5322 52.68%, #0A1E3E 95.36%)",
      logoColor: "orange",
      theme: "orange",
      screenBg: "orange",
      icon: require("assets/icons/eco-dev.svg"),
    },
    {
      name: "ECOLOGY",
      subtitle: "ECOLOGY",
      text: t("ecology"),
      fill: "linear-gradient(149.13deg, #A0E09C 18.3%, #0CB65F 55.25%, #A0E09C 100%)",
      logoColor: "green",
      theme: "lightGreen",
      screenBg: "light-green",
      icon: require("assets/icons/eco-eco.svg"),
    },
    {
      name: "HEALTH",
      subtitle: "HEALTH",
      text: t("health"),
      fill: "linear-gradient(149.13deg, #0A1E3E 0.09%, #9E1E26 55.25%, #0A1E3E 100%)",
      logoColor: "red",
      theme: "red",
      screenBg: "red",
      icon: require("assets/icons/eco-health.svg"),
    },
    {
      name: "INVEST",
      subtitle: "INVEST",
      text: t("invest"),
      fill: "linear-gradient(149.13deg, #0A1E3E 0.09%, #F79226 55.25%, #0A1E3E 100%)",
      logoColor: "yellow",
      theme: "yellow",
      screenBg: "yellow",
      icon: require("assets/icons/eco-invest.svg"),
    },
    {
      name: "MARKET",
      subtitle: "MARKET",
      text: t("market"),
      fill: "linear-gradient(149.13deg, #0A1E3E 0.09%, #9D1F60 55.25%, #0A1E3E 100%)",
      logoColor: "purple",
      theme: "purple",
      screenBg: "purple",
      icon: require("assets/icons/eco-market.svg"),
    },
    {
      name: "STARLINK",
      subtitle: "STARLINK",
      text: t("starlink"),
      fill: "linear-gradient(149.13deg, #0A1E3E 0.09%, #0E5B74 55.25%, #0A1E3E 100%)",
      logoColor: "biruze",
      theme: "biruze",
      screenBg: "biruze",
      icon: require("assets/icons/eco-starlink.svg"),
    },
    {
      name: "EDUCATION",
      subtitle: "EDUCATION",
      text: t("edu"),
      fill: "linear-gradient(149.13deg, #0A1E3E 0.09%, #04562C 55.25%, #0A1E3E 100%)",
      logoColor: "dark-green",
      theme: "darkGreen",
      screenBg: "green",
      icon: require("assets/icons/eco-edu.svg"),
    },
    {
      name: "NFT",
      subtitle: "NFT",
      text: t("nft"),
      fill: "linear-gradient(149.13deg, #0A1E3E 0.09%, #3C26C9 55.25%, #0A1E3E 100%)",
      logoColor: "dark-purple",
      theme: "indigo",
      screenBg: "indigo",
      icon: require("assets/icons/eco-nft.svg"),
    },
  ];
}
</script>

<style scoped lang="scss">
//$

.eco-slider {
  width: 100%;
  max-height: 750px;
  height: calc(100% - 75px);
  @include screen-xl {
    max-width: 620px;
  }
}
.card {
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  height: 70vh;
}
</style>
