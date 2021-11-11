<template>
  <AppFullPageScreen class="ecosystem">
    <h2>Особенности проекта</h2>
    <AppCarousel>
      <AppCarouselSlide
        v-for="(slide, index) in slides"
        :name="`${index}`"
        :key="index"
      >
        <div class="tw-text-center tw-mb-9" v-for="block in slide" :key="block.text">
          <InlineSvg class="tw-mx-auto tw-mb-3" :src="block.icon" />
          <p class="tw-text-xxs-1">{{ block.text }}</p>
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
};
</script>

<style scoped lang="scss">
</style>
