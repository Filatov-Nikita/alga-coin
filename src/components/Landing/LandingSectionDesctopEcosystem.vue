<template>
  <AppFullPageScreen name="eco-start" class="tw-py-2 tw-relative">
    <h2 v-if="$q.screen.lt.xl" class="app-h1 tw-text-center tw-mb-2-1">
      Экосистема
    </h2>
    <h2 v-else class="landing-h2 landing-h2--space">ЭКОСИСТЕМА</h2>

    <div class="eco-start__icons tw-mx-auto">
      <article
        class="eco-start__icon"
        v-for="icon in icons"
        :key="icon.name"
        :style="{ top: icon.y, left: icon.x }"
        @click="setVal(icon.value)"
      >
        <div class="eco-start__img">
          <InlineSvg :src="icon.icon" class="tw-mx-auto" />
        </div>
        <h3 class="tw-text-xs">{{ icon.name }}</h3>
      </article>
    </div>
  </AppFullPageScreen>
</template>

<script>
import { markRaw, inject } from 'vue';

export default {
  setup() {
    const icons = markRaw([
      {
        name: 'Alga Invest',
        x: '104px',
        y: '0px',
        value: 'INVEST',
        icon: require('assets/icons/eco-invest.svg'),
      },
      {
        name: 'Alga Market',
        x: '148px',
        y: '145px',
        value: 'MARKET',
        icon: require('assets/icons/eco-market.svg'),
      },
      {
        name: 'Alga Health',
        x: '0px',
        y: '267px',
        value: 'HEALTH',
        icon: require('assets/icons/eco-health.svg'),
      },
      {
        name: 'Alga Education',
        x: '79px',
        y: '428px',
        value: 'EDUCATION',
        icon: require('assets/icons/eco-edu.svg'),
      },

      {
        name: 'Alga Development',
        x: '325px',
        y: '24px',
        value: 'DEVELOPMENT',
        icon: require('assets/icons/eco-dev.svg'),
      },
      {
        name: 'Alga Banking',
        x: '487px',
        y: '63px',
        value: 'BANKING',
        icon: require('assets/icons/eco-bank.svg'),
      },
      {
        name: 'Alga NFT',
        x: '421px',
        y: '183px',
        value: 'NFT',
        icon: require('assets/icons/eco-nft.svg'),
      },
      {
        name: 'Alga Starlink',
        x: '476px',
        y: '318px',
        value: 'STARLINK',
        icon: require('assets/icons/eco-starlink.svg'),
      },
      {
        name: 'Alga Consulting',
        x: '293px',
        y: '408px',
        value: 'CONSULTING',
        icon: require('assets/icons/eco-case.svg'),
      },
      {
        name: 'Alga Ecology',
        x: '443px',
        y: '443px',
        value: 'ECOLOGY',
        icon: require('assets/icons/eco-eco.svg'),
      },
    ]);

    return { icons };
  },
  methods: {
    setVal(value) {
      this.$store.commit('landing/setEco', value);
      this.$router.push({ query: { section: 'ecosystem' } });
    },
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

.eco-start {
  &__icons {
    width: 535px;
    height: 491px;
    @apply tw-relative;
  }

  &__img {
    @apply tw-mr-3-1;
  }

  &__icon {
    width: 48px;
    height: 48px;
    line-height: 40px;
    transition: width 200ms;
    @apply tw-absolute tw-border-4 tw-border-secondary tw-rounded-full tw-bg-blue tw-text-center tw-cursor-pointer tw-flex tw-items-center tw-pr-7 tw-pl-1;

    h3 {
      @apply tw-hidden tw-whitespace-nowrap;
    }

    &:hover {
      width: 220px;

      h3 {
        @apply tw-block;
      }

      .eco-start__img {
        svg {
          fill: #fff;
        }
      }
    }
  }
}
</style>
