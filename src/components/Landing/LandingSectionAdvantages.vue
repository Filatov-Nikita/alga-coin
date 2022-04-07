<template>
  <AppFullPageScreen
    name="advantages"
    class="landing-page-y landing-h-center xl:tw-pt-8"
    :class="
      !$q.screen.lt.xl ? 'landing-h-center' : 'monet-block advantages__block'
    "
  >
    <div
      class="advantages landing-c-up"
      :style="
        $q.screen.lt.xl
          ? {
              'background-image': 'url(/icons/monet.svg)',
              margin: '30px 0 80px',
              'max-height': '100%',
              height: '100%',
            }
          : ''
      "
      :class="!$q.screen.lt.xl ? 'advantages__bg' : ''"
    >
      <div class="xl:tw-flex">
        <div class="advantages__coin tw-mb-5">
          <img src="~assets/images/landing/landing-coin.png" alt="монетка" />
        </div>

        <div class="advantages__info">
          <div
            class="text-lette-s tw-text-secondary tw-text-xxs xl:tw-text-xs tw-mb-2-1 xl:tw-mb-9"
          >
            {{ $t("landing.about.header") }}
          </div>

          <div
            class="tw-text-xs xl:tw-text-sm tw-font-normal tw-mb-5 xl:tw-mb-6"
          >
            {{ $t("landing.about.body") }}
          </div>

          <div class="tw-text-secondary">
            <div class="tw-text-md2 xl:tw-text-md1 tw-font-medium">
              100 000 000
            </div>
            <div class="tw-text-xs">{{ $t("landing.about.bottom") }}</div>
            <template v-if="$q.screen.lt.xl">
              <div class="tw-mt-5 tw-text-md2 tw-font-medium">55 265</div>
              <div class="tw-text-xs">{{ $t("landing.about.wallets") }}</div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </AppFullPageScreen>
</template>

<style scoped lang="scss">
//$

.advantages {
  padding-top: 54px;
  padding-bottom: 28px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;

  @include screen-xl {
    padding-top: 89px;
    padding-bottom: 62px;
    text-align: left;
    padding-right: 97px;
  }

  @apply tw-text-center tw-rounded-base tw-relative tw-px-5;
  &__block {
    height: calc(100vh - 66px);
  }
  &__coin {
    width: 114px;
    @apply tw-mx-auto;

    @include screen-xl {
      position: absolute;
      top: -30px;
      left: 128px;
      width: 400px;
    }

    img {
      width: 100%;
    }
  }

  &__info {
    @include screen-xl {
      flex-basis: 403px;
      margin-left: auto;
    }
  }

  &__bg {
    background: linear-gradient(
      155.4deg,
      #0a1e3e 3.87%,
      #213960 50.17%,
      #0a1e3e 87.74%
    );
  }
}
.monet-block {
  display: flex;
  flex-direction: column;
}
</style>
