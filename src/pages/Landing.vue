<template>
  <q-layout
    view="hHh lpR fFf"
    class="tw-bg-dark-blue-cover tw-relative tw-z-10"
  >
    <HeaderLanding>
      <template #menu>
        <LandingMenu :activeIndex="menuActive" @to="toSection" />
      </template>
    </HeaderLanding>
    <q-page-container>
      <q-page v-if="!Loading.isActive">
        <div class="tw-container">
          <AppFullPage
            ref="fullPage"
            @changeIndex="changeBg"
            :key="$q.screen.xl ? 'xl' : '0'"
          >
            <LandingSectionAdvantages />
            <LandingSectionFeatures />
            <LandingSectionOwners />
            <LandingSectionDesctopEcosystem v-if="$q.screen.xl" />
            <LandingSectionEcosystem />
            <LandingSectionProjects />
            <LandngSectionNews />
            <LandngSectionMobileFooter v-if="$q.screen.lt.xl" />
          </AppFullPage>
        </div>
      </q-page>
    </q-page-container>

    <FooterLanding />

    <transition
      enter-active-class="animated fadeIn"
      enter-leave-class="animated fadeOut"
      mode="in-out"
    >
      <div class="anim-bg anim-bg__blue" v-if="bg === 'blue'"></div>
      <div
        class="anim-bg anim-bg__dark-blue"
        v-else-if="bg === 'dark-blue'"
      ></div>
      <div class="anim-bg anim-bg__orange" v-else-if="bg === 'orange'"></div>
      <div class="anim-bg anim-bg__red" v-else-if="bg === 'red'"></div>
      <div class="anim-bg anim-bg__purple" v-else-if="bg === 'purple'"></div>
      <div class="anim-bg anim-bg__green" v-else-if="bg === 'green'"></div>
      <div class="anim-bg anim-bg__biruze" v-else-if="bg === 'biruze'"></div>
      <div
        class="anim-bg anim-bg__light-green"
        v-else-if="bg === 'light-green'"
      ></div>
      <div class="anim-bg anim-bg__indigo" v-else-if="bg === 'indigo'"></div>
      <div class="anim-bg anim-bg__yellow" v-else-if="bg === 'yellow'"></div>
    </transition>
    <InlineSvg
      v-if="$q.screen.xl"
      class="landing-bg-image"
      :src="require('assets/images/landing/main-bg.svg')"
    />
  </q-layout>
</template>

<script>
import LandingSectionAdvantages from 'src/components/Landing/LandingSectionAdvantages.vue';
import LandingSectionFeatures from 'src/components/Landing/LandingSectionFeatures.vue';
import LandingSectionOwners from 'src/components/Landing/LandingSectionOwners.vue';
import LandingSectionEcosystem from 'src/components/Landing/LandingSectionEcosystem.vue';
import LandingSectionDesctopEcosystem from 'src/components/Landing/LandingSectionDesctopEcosystem.vue';
import LandingSectionProjects from 'src/components/Landing/LandingSectionProjects.vue';
import LandngSectionNews from 'src/components/Landing/LandngSectionNews.vue';
import LandngSectionMobileFooter from 'src/components/Landing/LandngSectionMobileFooter.vue';
import FooterLanding from 'src/layouts/FooterLanding.vue';
import HeaderLanding from 'src/layouts/HeaderLanding.vue';
import LandingMenu from 'src/components/Landing/LandingMenu.vue';
import useTheme from 'src/composition/useTheme';
import { useStore } from 'vuex';
import { Screen, useQuasar } from 'quasar';
import { ref, provide, reactive, onUnmounted } from 'vue';

export default {
  setup() {
    const $q = useQuasar();
    const store = useStore();
    const { theme } = useTheme();
    const bg = ref('blue');
    const menuActive = ref(0);
    const fullPage = ref(null);

    (async () => {
      $q.loading.show();
      try {
        await Promise.all([
          store.dispatch('landing/newsList'),
          store.dispatch('landing/projectsList'),
        ]);
      } catch (e) {
        throw e;
      } finally {
        $q.loading.hide();
      }
    })();

    const screenBgColors = reactive({
      0: 'blue',
      1: 'dark-blue',
      2: 'blue',
      3: 'dark-blue',
      4: 'blue',
      5: 'blue',
      6: 'dark-blue',
    });

    const screenTheme = reactive({
      0: 'default',
      1: 'default',
      2: 'default',
      3: 'default',
      4: 'blue',
      5: 'default',
      6: 'default',
    });

    provide('updateBg', (name) => {
      bg.value = name;
      screenBgColors[menuActive.value] = name;
    });

    provide('screenActiveIndex', menuActive);

    provide('updateTheme', (name) => {
      const isMobile = Screen.lt.xl;
      if (isMobile && ![0, 2, 3].includes(menuActive.value)) return;

      theme.value = name;
      screenTheme[menuActive.value] = name;
    });

    const changeBg = (index) => {
      const isMobile = Screen.lt.xl;

      let newBg = screenBgColors[index];
      if (isMobile && ![0, 2, 3].includes(index)) newBg = '';

      bg.value = newBg;
      theme.value = screenTheme[index];
      menuActive.value = index;
    };

    const toSection = (index) => {
      fullPage.value.toByIndex(index);
    };

    onUnmounted(() => {
      store.commit('landing/setEco', 'BANKING');
    });

    return {
      bg,
      menuActive,
      fullPage,
      changeBg,
      toSection,
      Loading: $q.loading,
    };
  },
  components: {
    LandingSectionAdvantages,
    LandingSectionFeatures,
    LandingSectionOwners,
    LandngSectionNews,
    HeaderLanding,
    LandingMenu,
    FooterLanding,
    LandingSectionProjects,
    LandingSectionEcosystem,
    LandingSectionDesctopEcosystem,
    LandngSectionMobileFooter,
  },
};
</script>
<style scoped lang="scss">
.landing-bg-image {
  position: fixed;
  z-index: -1;
  width: 110%;
  height: 110%;
  left: 50%;
  top: -30px;
  transform: translateX(-50%);
}
</style>
