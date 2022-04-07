<template>
  <div class="tw-container">
    <AppFullPageScreen
      name="features"
      class="landing-page-y landing-h-center tw-relative tw-container"
      :class="{ features: $q.screen.lt.xl }"
    >
      <h2 v-if="$q.screen.lt.xl" class="tw-text-md2 tw-text-center tw-mb-7-1">
        {{ t("mHeader") }}
      </h2>
      <h2 v-else class="landing-h2 landing-h2--space" v-html="t('header')"></h2>
      <AppCarousel v-if="$q.screen.lt.xl">
        <!-- <AppCarouselSlide
        v-for="(slide, index) in slides"
        :name="`${index}`"
        :key="index"
      > -->
        <template v-for="(slide, index) in slides">
          <div
            class="tw-text-center tw-mb-9"
            v-for="block in slide"
            :key="block.text"
          >
            <div class="feat__img tw-mx-auto tw-mb-3">
              <InlineSvg width="66px" height="70px" :src="block.icon" />
            </div>
            <p class="tw-text-xs">{{ block.text }}</p>
          </div>
        </template>
        <!-- </AppCarouselSlide> -->
      </AppCarousel>

      <div v-else class="tw-flex tw-justify-between landing-c-up">
        <div></div>

        <AppCarousel
          class="feat__slider-desc"
          height="284px"
          v-model="curSlide"
        >
          <AppCarouselSlide
            v-for="(slide, index) in flatSlides"
            :name="`${index}`"
            :key="index"
            class="tw-px-5 tw-pb-7"
          >
            <div class="tw-mb-9" :key="slide.text">
              <div class="feat__img tw-mb-8">
                <InlineSvg width="140px" height="148px" :src="slide.icon" />
              </div>
              <p class="tw-text-sm">{{ slide.text }}</p>
            </div>
          </AppCarouselSlide>
        </AppCarousel>

        <div class="app-gutter-y-md tw-inline-flex tw-flex-col tw-flex-wrap">
          <button
            v-for="(slide, index) in flatSlides"
            :key="index"
            @click="curSlide = `${index}`"
            class="landing-icon-cover"
          >
            <InlineSvg
              class="tw-mx-auto"
              :fill="curSlide === `${index}` ? 'url(#g)' : '#0A1E3E'"
              :src="slide.icon2"
            />
          </button>
        </div>
      </div>
    </AppFullPageScreen>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const messages = {
  "en-US": {
    header: "PROJECT <br /> FEATURES",
    mHeader: "Project Features",
    slider: {
      slide1:
        "Alga Ecosystem is a decentralized autonomous organization (DAO) that creates products to enter new markets within the traditional and digital economy",
      slide2:
        "Alga is an ecosystem created for the full circulation of digital assets and provides greater liquidity in the digital market",
      slide3:
        "Alga is a world of great opportunities, where participants are constantly moving towards receiving a basic unconditional income, regardless of social status, age and place of work",
      slide4: "Alga - ample opportunities for investing in digital assets",
      slide5:
        "Alga is a community where everyone can submit a proposal and vote on initiatives for mutual success",
      slide6:
        "Alga is a new launching NFT platform for creative startups for beginners and experienced artists",
    },
  },
  "ru-RU": {
    header: "ФИШКИ <br /> ПРОЕКТА",
    mHeader: "Особенности проекта",
    slider: {
      slide1:
        "Alga Ecosystem — децентрализованная автономная организация (DAO), создающая продукты для выхода на новые рынки в рамках традиционной и цифровой экономики",
      slide2:
        "Alga — это экосистема, созданная для полного обращения цифровых активов и обеспечивающая большую ликвидность на цифровом рынке",
      slide3:
        "Alga — это мир больших возможностей, где участники безостановочно двигаются к получению базового безусловного дохода вне зависимости от социального статуса, возраста и места работы",
      slide4: "Alga — широкие возможности для инвестирования в цифровые активы",
      slide5:
        "Alga — это сообщество, где каждый может подать предложение и голосовать за инициативы для достижения взаимного успеха",
      slide6:
        "Alga — это новая стартовая NFT-площадка творческих стартапов для начинающих и опытных представителей искусства",
    },
  },
};

const getSlides = (t) => [
  [
    {
      icon: require("assets/images/landing/landing-feat-1.svg"),
      text: t("slider.slide1"),
      icon2: require("assets/icons/feat-world.svg"),
    },
    {
      icon: require("assets/images/landing/landing-feat-2.svg"),
      text: t("slider.slide2"),
      icon2: require("assets/icons/feat-eco.svg"),
    },
  ],
  [
    {
      icon: require("assets/images/landing/landing-feat-3.svg"),
      text: t("slider.slide3"),
      icon2: require("assets/icons/feat-opp.svg"),
    },
    {
      icon: require("assets/images/landing/landing-feat-4.svg"),
      text: t("slider.slide4"),
      icon2: require("assets/icons/feat-crypto.svg"),
    },
  ],
  [
    {
      icon2: require("assets/icons/feat-community.svg"),
      icon: require("assets/images/landing/landing-feat-5.svg"),
      text: t("slider.slide5"),
    },
    {
      icon2: require("assets/icons/feat-nft.svg"),
      icon: require("assets/images/landing/landing-feat-6.svg"),
      text: t("slider.slide6"),
    },
  ],
];

export default {
  setup() {
    const { t } = useI18n({ messages });
    const slides = computed(() => getSlides(t));

    return { t, slides };
  },
  data() {
    return {
      curSlide: "0",
    };
  },
  computed: {
    flatSlides() {
      const slides = [];

      this.slides.forEach((slide) => {
        slides.push(...slide);
      });

      return slides;
    },
  },
};
</script>

<style scoped lang="scss">
//$
.features {
  padding-top: 24px;
}
.feat {
  &__slider-desc {
    max-width: 570px;
    width: 100%;
  }

  &__img {
    width: 66px;
    height: 70px;
    @include screen-xl {
      width: 148px;
      height: 148px;
    }
  }
}
</style>
