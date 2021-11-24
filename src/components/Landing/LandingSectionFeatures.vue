<template>
  <AppFullPageScreen
    name="features"
    class="landing-page-y landing-h-center tw-relative"
  >
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
          <div class="feat__img tw-mx-auto tw-mb-3">
            <InlineSvg
              width="66px"
              height="70px"
              :src="block.icon"
            />
          </div>
          <p class="tw-text-xxs-1">{{ block.text }}</p>
        </div>
      </AppCarouselSlide>
    </AppCarousel>

    <div v-else class="tw-flex tw-justify-between landing-c-up">
      <div></div>

      <AppCarousel class="feat__slider-desc" height="284px" v-model="curSlide">
        <AppCarouselSlide
          v-for="(slide, index) in flatSlides"
          :name="`${index}`"
          :key="index"
        >
          <div class="tw-mb-9" :key="slide.text">
            <div class="feat__img tw-mb-3">
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
</template>

<script>
export default {
  data() {
    return {
      curSlide: '0',
      slides: [
        [
          {
            icon: require('assets/images/landing/landing-feat-1.svg'),
            text: 'Alga Ecosystem — децентрализованная автономная организация (DAO), создающая продукты для выхода на новые рынки в рамках традиционной и цифровой экономики',
            icon2: require('assets/icons/feat-world.svg'),
          },
          {
            icon: require('assets/images/landing/landing-feat-2.svg'),
            text: 'Alga — это экосистема, созданная для полного обращения цифровых активов и обеспечивающая большую ликвидность на цифровом рынке',
            icon2: require('assets/icons/feat-eco.svg'),
          },
        ],
        [
          {
            icon: require('assets/images/landing/landing-feat-3.svg'),
            text: 'Alga — это мир больших возможностей, где участники безостановочно двигаются к получению базового безусловного дохода вне зависимости от социального статуса, возраста и места работы',
            icon2: require('assets/icons/feat-opp.svg'),
          },
          {
            icon: require('assets/images/landing/landing-feat-4.svg'),
            text: 'Alga — широкие возможности для инвестирования в цифровые активы',
            icon2: require('assets/icons/feat-crypto.svg'),
          },
        ],
        [
          {
            icon2: require('assets/icons/feat-community.svg'),
            icon: require('assets/images/landing/landing-feat-5.svg'),
            text: 'Alga — это сообщество, где каждый может подать предложение и голосовать за инициативы для достижения взаимного успеха',
          },
          {
            icon2: require('assets/icons/feat-nft.svg'),
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
//$

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
