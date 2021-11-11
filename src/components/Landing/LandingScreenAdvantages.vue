<template>
  <AppFullPageScreen class="landing-page-y">
    <div class="tw-container">
      <div class="advantages">
        <div class="tw-relative tw-z-10">
          <div class="advantages__coin tw-mb-3">
            <img src="~assets/images/landing/landing-coin.png" alt="монетка" />
          </div>

          <div class="tw-text-secondary tw-text-xxs-1 tw-mb-2-1">О ТОКЕНЕ</div>

          <div class="tw-text-xxs-1 tw-mb-3">
            AlgaCoin — это токен, управляемый сообществом со множеством будущих
            проектов и партнёрств, направленный на повышение уровня жизни
            участников сообщества путём создания экологичных бизнес-проектов
          </div>

          <div class="tw-text-secondary">
            <div class="tw-text-md2">999 255 265</div>
            <div class="tw-text-xxs">монет</div>
            <div class="tw-text-md2">55 265</div>
            <div class="tw-text-xxs">кошельков</div>
          </div>
        </div>
        <InlineSvg
          class="advantages__cover"
          :src="require('assets/images/landing/landing-cover.svg')"
        />
      </div>
    </div>
  </AppFullPageScreen>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.advantages {
  padding-top: 54px;
  padding-bottom: 28px;
  @apply tw-text-center tw-rounded-base tw-relative tw-px-5;

  &__coin {
    width: 114px;
    @apply tw-mx-auto;
  }

  &__cover {
    position: absolute;
    top: 0;
    left: 0;
    @apply tw-w-full tw-h-full;
    z-index: 0;
  }

  &__bg {
    background: linear-gradient(
      149.13deg,
      #0a1e3e 0.09%,
      #045093 55.25%,
      #0a1e3e 100%
    );
  }
}
</style>
