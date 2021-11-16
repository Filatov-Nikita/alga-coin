<template>
  <AppFullPageScreen class="tw-py-2 tw-relative">
    <h2 v-if="$q.screen.lt.xl" class="app-h1 tw-text-center tw-mb-2-1">
      Экосистема
    </h2>
    <h2
      v-else
      class="landing-h2 landing-h2--space"
      :style="{ color: themes[theme] }"
    >
      ЭКОСИСТЕМА
    </h2>

    <AppCarousel class="eco-slider">
      <AppCarouselSlide
        v-for="item in items"
        :key="item.name"
        :name="item.name"
        :style="{ background: $q.screen.lt.xl ? item.fill : '' }"
        class="tw-py-7 tw-px-5 tw-rounded-base"
        @enter="changeTheme(item.theme, item.screenBg)"
      >
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
              {{ item.name }}
            </h3>
          </div>
        </div>
        <article class="tw-text-center xl:tw-text-left">
          <template v-if="$q.screen.lt.xl">
            <h3 class="tw-font-medium tw-text-xxs-1 tw-mb-4-1">
              {{ item.name }}
            </h3>
            <p class="tw-text-xxs-2 tw-mb-2">О НАПРАВЛЕНИИ</p>
          </template>
          <p class="tw-text-xxs-1 xl:tw-text-sm">{{ item.text }}</p>
        </article>
      </AppCarouselSlide>
    </AppCarousel>
  </AppFullPageScreen>
</template>

<script>
import { markRaw, inject } from 'vue';
import LandingLogo from './LandingLogo.vue';

export default {
  setup() {
    const theme = inject('theme');
    const themes = inject('themes');
    const switchTheme = inject('switchTheme');
    const updateBg = inject('updateBg');
    const updateTheme = inject('updateTheme');
    const items = markRaw(getItems());

    const changeTheme = (themeName, bgName) => {
      switchTheme(themeName);
      updateBg(bgName);
      updateTheme(themeName);
    };

    return {
      items,
      theme,
      themes,
      changeTheme,
    };
  },
  components: {
    LandingLogo,
  },
};

function getItems() {
  return [
    {
      name: 'BANKING',
      text: 'Создание, покупка, продажа, хранение, безопасная защита и финансовое управление цифровыми активами (виртуальными товарами и валютами), а также все направления бизнеса, которые обслуживают экосистему Alga',
      fill: 'linear-gradient(149.13deg, #156AEB 0.09%, #0D3B81 55.25%, #156AEB 100%)',
      logoColor: 'blue',
      theme: 'blue',
      screenBg: 'blue',
    },
    {
      name: 'CONSULTING',
      text: 'Объёмный модуль экспертных данных, создающий разумные производственные процессы для бизнеса, объединяющий технологию искусственного интеллекта, данные и аналитику. Alga Consulting — это возможность модернизировать рабочие процессы, технологии и компанию в целом для достижения впечатляющих бизнес-результатов',
      fill: 'linear-gradient(149.13deg, #0A1E3E 0.09%, #1D4786 55.25%, #0A1E3E 100%)',
      logoColor: 'dark-blue',
      theme: 'darkBlue',
      screenBg: 'dark-blue',
    },
    {
      name: 'DEVELOPMENT',
      text: 'Цифровая инвестиционная платформа, основанная на традиционных инструментах инвестирования в недвижимость. Держатели активов ALGA могут проводить аудит проектов, инвестировать в строительство объектов недвижимости, контролировать риски, беспрепятственно торговать правами собственности на объекты',
      fill: 'linear-gradient(150.99deg, #0A1E3E 0.09%, #EE5322 52.68%, #0A1E3E 95.36%)',
      logoColor: 'orange',
      theme: 'orange',
      screenBg: 'orange',
    },
    {
      name: 'ECOLOGY',
      text: 'Использование возможностей Alga Ecosystem для более устойчивого и бережного управления природными ресурсами планеты',
      fill: 'linear-gradient(149.13deg, #A0E09C 18.3%, #0CB65F 55.25%, #A0E09C 100%)',
      logoColor: 'green',
      theme: 'lightGreen',
      screenBg: 'light-green',
    },
    {
      name: 'HEALTH',
      text: 'Онлайн-консультации с ведущими специалистами мира и разработка противовирусных препаратов',
      fill: 'linear-gradient(149.13deg, #0A1E3E 0.09%, #9E1E26 55.25%, #0A1E3E 100%)',
      logoColor: 'red',
      theme: 'red',
      screenBg: 'red',
    },
    {
      name: 'INVEST',
      text: 'Стартовая инвестиционная площадка для подготовки и реализации новых, инновационных и экологических проектов по всему миру',
      fill: 'linear-gradient(149.13deg, #0A1E3E 0.09%, #F79226 55.25%, #0A1E3E 100%)',
      logoColor: 'yellow',
      theme: 'yellow',
      screenBg: 'yellow',
    },
    {
      name: 'MARKET',
      text: 'Торговая площадка для покупки, продажи и управления сетевыми и физическими активами участниками сообщества',
      fill: 'linear-gradient(149.13deg, #0A1E3E 0.09%, #9D1F60 55.25%, #0A1E3E 100%)',
      logoColor: 'purple',
      theme: 'purple',
      screenBg: 'purple',
    },
    {
      name: 'STARLINK',
      text: 'Проект по формированию собственной системы обеспечения независимого доступа к высокоскоростному Интернету и мобильной связи',
      fill: 'linear-gradient(149.13deg, #0A1E3E 0.09%, #0E5B74 55.25%, #0A1E3E 100%)',
      logoColor: 'biruze',
      theme: 'biruze',
      screenBg: 'biruze',
    },
    {
      name: 'EDUCATION',
      text: 'Децентрализованная экосистема онлайн-обучения',
      fill: 'linear-gradient(149.13deg, #0A1E3E 0.09%, #04562C 55.25%, #0A1E3E 100%)',
      logoColor: 'dark-green',
      theme: 'darkGreen',
      screenBg: 'green',
    },
    {
      name: 'NFT',
      text: 'Платформа для создателей произведений искусств, нацеленная на создание новой креативной экономики. Alga NFT — это маркетплейс современного искусства нового поколения',
      fill: 'linear-gradient(149.13deg, #0A1E3E 0.09%, #3C26C9 55.25%, #0A1E3E 100%)',
      logoColor: 'dark-purple',
      theme: 'indigo',
      screenBg: 'indigo',
    },
  ];
}
</script>

<style scoped lang="scss">
//$

.eco-slider {
  @include screen-xl {
    max-width: 620px;
    @apply tw-mx-auto;
  }
}
</style>
