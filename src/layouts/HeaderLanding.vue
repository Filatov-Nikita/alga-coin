<template>
  <!-- мобильное меню -->
  <q-header
    v-if="$q.screen.lt.xl"
    :class="{ 'mobile-header--open': mobileShow }"
  >
    <div class="tw-container tw-py-4-1">
      <div class="tw-pt-safe">
        <div class="tw-flex tw-items-center">
          <router-link class="app-logo-2 tw-mr-3" :to="{ name: 'home' }">
            <InlineSvg
              :src="require('assets/images/app-logo-2.svg')"
              alt="логотип"
            />
          </router-link>
          <div class="tw-text-xxs-1">
            Законные безусловные <br />
            глобальные активы
          </div>

          <q-space />

          <AppButton
            class="mobile-header__btn tw--mx-3"
            :class="{ 'mobile-header__btn--active': mobileShow }"
            :icon="require('assets/icons/plus.svg')"
            design="round"
            @click="toggleMobile"
          />
        </div>
      </div>
    </div>
    <HeaderBaseDropdown v-show="mobileShow" />
  </q-header>

  <!-- десктопоное меню -->
  <q-header v-else class="tw-py-5">
    <div class="tw-container">
      <div class="flex tw-items-center tw-mb-6">
        <router-link class="app-logo-2 tw-mr-9" :to="{ name: 'home' }">
          <InlineSvg
            :src="require('assets/images/app-logo-2.svg')"
            alt="логотип"
            :transformSource="coloringLogo"
          />
        </router-link>
        <div class="tw-text-xxs-1">
          Законные безусловные <br />
          глобальные активы
        </div>

        <q-space />

        <div class="app-col-5 tw-flex tw-items-center">
          <AppButton
            :iconStg="{ width: '24px', height: '24px', fill: themes[theme] }"
            :icon="require('assets/profile.svg')"
            fullWidth
            label="Авторизоваться"
            :to="{ name: 'auth.login' }"
            design="flat"
            class="tw-mr-6"
            textClass="tw-text-xs"
          />
          <AppButton
            fullWidth
            label="Зарегистрироваться"
            :to="{ name: 'auth.registr' }"
            class="tw-mb-2-1"
            textClass="tw-text-xxs"
            :style="{ background: themes[theme] }"
          />
        </div>
      </div>

      <slot name="menu" />
    </div>
  </q-header>
</template>

<script>
import HeaderBaseDropdown from './HeaderBaseDropdown.vue';
import { ref, inject } from 'vue';

export default {
  setup() {
    const themes = inject('themes');
    const theme = inject('theme');
    const mobileShow = ref(false);

    const toggleMobile = () => {
      mobileShow.value = !mobileShow.value;
    };

    const coloringLogo = (svg) => {
      console.log(themes);
      svg.children[0].style.fill = themes[theme.value];
      return svg;
    };

    return {
      toggleMobile,
      mobileShow,
      themes,
      theme,
      coloringLogo,
    };
  },
  components: {
    HeaderBaseDropdown,
  },
};
</script>

<style scoped lang="scss">
.mobile-header {
  &__btn {
    transition: transform 500ms;

    &--active {
      transform: rotate(135deg);
    }
  }

  &--open {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    @apply tw-bg-dark;
  }
}
</style>
