<template>
  <AppFullPageScreen class="landing-page-y tw-relative">
    <h2 v-if="$q.screen.lt.xl" class="app-h1 tw-text-center tw-mb-7-1">
      Особенности проекта
    </h2>
    <h2 v-else class="landing-h2 landing-h2--space">
      ФИШКИ <br />
      ПРОЕКТА
    </h2>
    <AppCarousel v-if="$q.screen.lt.xl">
      <AppCarouselSlide
        v-for="(slide, index) in slides"
        :name="`${index}`"
        :key="index"
      >
        <div
          class="tw-text-center tw-mb-9"
          v-for="block in slide"
          :key="block.text"
        >
          <InlineSvg
            width="66px"
            height="70px"
            class="tw-mx-auto tw-mb-3"
            :src="block.icon"
          />
          <p class="tw-text-xxs-1">{{ block.text }}</p>
        </div>
      </AppCarouselSlide>
    </AppCarousel>
    <AppCarousel v-else class="feat__slider-desc" height="284px">
      <AppCarouselSlide
        v-for="(slide, index) in flatSlides"
        :name="`${index}`"
        :key="index"
      >
        <div class="tw-mb-9" :key="slide.text">
          <InlineSvg
            width="140px"
            height="148px"
            class="tw-mb-3"
            :src="slide.icon"
          />
          <p class="tw-text-sm">{{ slide.text }}</p>
        </div>
      </AppCarouselSlide>
    </AppCarousel>
  </AppFullPageScreen>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        [
          {
            icon: require('assets/images/landing/landing-feat-1.svg'),
            text: 'Alga Ecosystem — децентрализованная автономная организация (DAO), создающая продукты для выхода на новые рынки в рамках традиционной и цифровой экономики',
          },
          {
            icon: require('assets/images/landing/landing-feat-2.svg'),
            text: 'Alga — это экосистема, созданная для полного обращения цифровых активов и обеспечивающая большую ликвидность на цифровом рынке',
          },
        ],
        [
          {
            icon: require('assets/images/landing/landing-feat-3.svg'),
            text: 'Alga — это мир больших возможностей, где участники безостановочно двигаются к получению базового безусловного дохода вне зависимости от социального статуса, возраста и места работы',
          },
          {
            icon: require('assets/images/landing/landing-feat-4.svg'),
            text: 'Alga — широкие возможности для инвестирования в цифровые активы',
          },
        ],
        [
          {
            icon: require('assets/images/landing/landing-feat-5.svg'),
            text: 'Alga — это сообщество, где каждый может подать предложение и голосовать за инициативы для достижения взаимного успеха',
          },
          {
            icon: require('assets/images/landing/landing-feat-6.svg'),
            text: 'Alga — это новая стартовая NFT-площадка творческих стартапов для начинающих и опытных представителей искусства',
          },
        ],
      ],
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
.feat {
  &__slider-desc {
    max-width: 570px;
    @apply tw-mx-auto;
  }
}
</style>
