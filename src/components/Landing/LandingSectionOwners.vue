<template>
  <AppFullPageScreen name="owners">
    <div
      class="
        tw-h-full
        landing-page-y landing-h-center
        tw-relative
        xl:tw-overflow-hidden
      "
    >
      <h2 v-if="$q.screen.lt.xl" class="app-h1 tw-text-center tw-mb-7-1">
        {{ t('mHeader') }}
      </h2>
      <h2
        v-else
        class="landing-h2 landing-h2--space"
        :style="{ color: themes[theme] }"
      >
        {{ t('header') }}
      </h2>

      <!-- мобильная версия -->
      <AppCarousel
        class="tw-relative"
        v-if="$q.screen.lt.xl"
        height="270px"
        :modelValue="$store.state.landing.curOwner"
        @update:modelValue="$store.commit('landing/setOwner', $event)"
      >
        <AppCarouselSlide
          v-for="(item, index) in items"
          :key="index"
          :name="`${index}`"
          @enter="changeTheme(item.theme, item.screenBg)"
        >
          <article class="tw-text-center">
            <q-img
              :src="item.avatar"
              width="270px"
              class="tw-mb-3-1 tw-mx-auto"
            />
            <h3 class="tw-mb-2 tw-text-xs">
              {{ item.firstName }}
              {{ item.secondName }}
            </h3>
            <p
              class="tw-text-xxs-1 tw-tracking-mid"
              :style="{ color: themes[theme] }"
            >
              {{ item.position }}
            </p>
          </article>
        </AppCarouselSlide>
        <AppCarouselSlide
          key="connect"
          name="connect"
          @enter="changeTheme('blue', 'dark-blue')"
        >
          <article class="tw-text-center">
            <div class="tw-relative tw-inline-block">
              <q-img
                class="tw-mb-3-1"
                :src="require('assets/images/landing/connect-cover.svg')"
                width="270px"
              />
              <AppButton
                class="
                  tw-z-20
                  tw-absolute
                  tw-left-1/2
                  tw-top-1/2
                  tw-transform
                  tw--translate-x-1/2
                  tw--translate-y-1/2
                "
                size="lg"
                :icon="require('assets/icons/plus.svg')"
                :iconStg="{ width: '20px', height: '20px' }"
                design="round"
                :to="{ name: 'offer-project' }"
              />
            </div>
            <h3 class="tw-text-xs tw-mb-2" v-html="t('join.text1')"></h3>
            <p
              :style="{ color: themes[theme] }"
              class="tw-text-xxs-1 tw-tracking-mid"
            >
              {{ t('join.text2') }}
            </p>
          </article>
          <InlineSvg
            width="111px"
            height="144px"
            class="tw-absolute tw--left-12 tw-bottom-20 tw-z-10"
            :src="require('assets/images/landing/coin-big.svg')"
          />

          <InlineSvg
            width="129px"
            height="165px"
            class="tw-absolute tw--right-8 tw--top-8 tw-z-10"
            :src="require('assets/images/landing/coin-small.svg')"
          />
        </AppCarouselSlide>
      </AppCarousel>

      <!-- полная версия -->
      <div v-else class="tw-flex tw-justify-center">
        <div
          class="
            tw-flex
            tw-justify-center
            tw-w-full
            tw-space-x-24
            tw-items-center
            tw-relative
          "
        >
          <div
            class="tw-relative"
            v-if="$store.state.landing.curOwner === 'connect'"
          >
            <q-img
              :src="require('assets/images/landing/connect-cover.svg')"
              width="400px"
            />
            <AppButton
              class="tw-absolute tw-top-48 tw-left-44 tw-z-20"
              size="lg"
              :icon="require('assets/icons/plus.svg')"
              :iconStg="{ width: '20px', height: '20px' }"
              design="round"
              :to="{ name: 'offer-project' }"
            />
          </div>
          <q-img
            v-else
            :src="items[$store.state.landing.curOwner].avatar"
            width="400px"
          />
          <AppCarousel
            class="tw-w-full tw-max-w-sm"
            height="270px"
            :modelValue="$store.state.landing.curOwner"
            @update:modelValue="$store.commit('landing/setOwner', $event)"
          >
            <AppCarouselSlide
              v-for="(item, index) in items"
              :key="index"
              :name="`${index}`"
              class="tw-py-7 tw-px-5"
              @enter="changeTheme(item.theme, item.screenBg)"
            >
              <article>
                <h3 class="tw-text-lg tw-mb-1">
                  {{ item.firstName }} <br />
                  {{ item.secondName }}
                </h3>
                <p class="tw-tracking-mid" :style="{ color: themes[theme] }">
                  {{ item.position }}
                </p>
              </article>
            </AppCarouselSlide>
            <AppCarouselSlide
              key="connect"
              name="connect"
              class="tw-py-7 tw-px-5"
              @enter="changeTheme('blue', 'dark-blue')"
            >
              <article class="tw-absolute tw-w-full tw-max-w-lg">
                <h3 class="tw-text-lg tw-mb-1" v-html="t('join.text1')"></h3>
                <p :style="{ color: themes[theme] }" class="tw-tracking-mid">
                  {{ t('join.text2') }}
                </p>
              </article>
              <InlineSvg
                class="tw-absolute tw-left-0 tw--bottom-64 tw-z-10"
                :src="require('assets/images/landing/coin-big.svg')"
              />
              <InlineSvg
                class="tw-absolute tw-right-0 tw--top-12 tw-z-10"
                :src="require('assets/images/landing/coin-small.svg')"
              />
            </AppCarouselSlide>
          </AppCarousel>
        </div>
      </div>
    </div>
  </AppFullPageScreen>
</template>

<script>
import { inject, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const messages = {
  'ru-RU': {
    mHeader: 'Резиденты Alga',
    header: 'РЕЗИДЕНТЫ',
    slider: {
      slide1: {
        firstName: 'Урал',
        secondName: 'Казарбаев',
        position: 'ПРЕДПРИНИМАТЕЛЬ, ИНВЕСТОР',
      },
      slide2: {
        firstName: 'Глеб',
        secondName: 'Глебов',
        position: 'ВРАЧ-ИНФЕКЦИОНИСТ',
      },
    },
    join: {
      text1: 'Присоединиться <br /> к ALGA Ecosystem',
      text2: 'ЗАРЕГИСТРИРОВАТЬСЯ В СИСТЕМЕ',
    },
  },
  'en-US': {
    mHeader: 'Alga Residents',
    header: 'RESIDENTS',
    slider: {
      slide1: {
        firstName: 'Ural',
        secondName: 'Kazarbaev',
        position: 'BUISNESSMAN, INVESTOR',
      },
      slide2: {
        firstName: 'Gleb',
        secondName: 'Glebov',
        position: 'INFECTIOUS DISEASE PHYSICIAN',
      },
    },
    join: {
      text1: 'Join to ALGA Ecosystem',
      text2: 'REGISTER IN THE SYSTEM',
    },
  },
};

export default {
  setup() {
    const theme = inject('theme');
    const themes = inject('themes');
    const switchTheme = inject('switchTheme');
    const updateBg = inject('updateBg');
    const updateTheme = inject('updateTheme');
    const { t } = useI18n({
      messages,
    });

    const items = computed(() => [
      {
        firstName: t('slider.slide1.firstName'),
        secondName: t('slider.slide1.secondName'),
        position: t('slider.slide1.position'),
        theme: 'blue',
        screenBg: 'blue',
        avatar: 'images/owner-1.png',
      },
      {
        firstName: t('slider.slide2.firstName'),
        secondName: t('slider.slide2.secondName'),
        position: t('slider.slide2.position'),
        theme: 'darkGreen',
        screenBg: 'green',
        avatar: 'images/owner-2.png',
      },
    ]);

    const changeTheme = (themeName, bgName) => {
      setTimeout(() => {
        switchTheme(themeName);
        updateBg(bgName);
        updateTheme(themeName);
      }, 0);
    };

    return {
      theme,
      themes,
      items,
      switchTheme,
      updateBg,
      updateTheme,
      changeTheme,
      t,
    };
  },
};
</script>

<style>
</style>
