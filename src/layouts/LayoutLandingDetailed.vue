<template>
  <q-layout
    view="hhh lpR fFf"
    class="tw-relative tw-z-10"
    :class="{
      'anim-bg__blue': $q.screen.xl,
      'tw-bg-dark': $q.screen.lt.xl,
    }"
  >
    <HeaderLanding>
      <template #menu>
        <LandingMenu :activeIndex="0" @to="$router.push({ name: 'home' })" />
      </template>
    </HeaderLanding>

    <q-page-container>
      <div class="tw-container">
        <router-view class="tw-relative tw-z-10" />
      </div>
    </q-page-container>

    <FooterLanding />

    <div
      v-if="$q.screen.xl"
      class="tw-absolute tw-w-full tw-h-full tw-left-0 tw-top-0"
    >
      <div class="tw-container tw-h-full">
        <div class="tw-h-full tw-bg-dark tw--mx-28 tw-relative">
          <InlineSvg
            class="
              tw-absolute
              tw--top-20
              tw-left-1/2
              tw-transform
              tw--translate-x-1/2
              tw-max-h-full
              tw-z-0
              tw-mix-blend-overlay
            "
            :src="require('assets/images/landing/main-bg.svg')"
          />
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
import FooterLanding from 'src/layouts/FooterLanding.vue';
import HeaderLanding from 'src/layouts/HeaderLanding.vue';
import LandingMenu from 'src/components/Landing/LandingMenu.vue';
import useTheme from 'src/composition/useTheme';

export default {
  setup() {
    useTheme();
  },
  components: {
    HeaderLanding,
    FooterLanding,
    LandingMenu,
  },
};
</script>

<style scoped>
</style>
