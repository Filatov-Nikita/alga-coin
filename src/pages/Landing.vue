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
      <q-page>
        <div class="tw-container">
          <AppFullPage ref="fullPage" @changeIndex="changeBg">
            <LandingSectionAdvantages />
            <LandingSectionFeatures />
            <LandingSectionEcosystem />
            <LandingSectionProjects />
            <LandngSectionNews />
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
      <div class="anim-bg__blue" v-if="bg === 'blue'"></div>
      <div class="anim-bg__dark-blue" v-else-if="bg === 'dark-blue'"></div>
      <div class="anim-bg__orange" v-else-if="bg === 'orange'"></div>
      <div class="anim-bg__red" v-else-if="bg === 'red'"></div>
      <div class="anim-bg__purple" v-else-if="bg === 'purple'"></div>
      <div class="anim-bg__green" v-else-if="bg === 'green'"></div>
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
import LandingSectionEcosystem from 'src/components/Landing/LandingSectionEcosystem.vue';
import LandingSectionProjects from 'src/components/Landing/LandingSectionProjects.vue';
import LandngSectionNews from 'src/components/Landing/LandngSectionNews.vue';
import FooterLanding from 'src/layouts/FooterLanding.vue';
import HeaderLanding from 'src/layouts/HeaderLanding.vue';
import LandingMenu from 'src/components/Landing/LandingMenu.vue';
import { ref, provide } from 'vue';
import { Screen } from 'quasar';

export default {
  setup() {
    const themes = {
      default: '#0083F5',
      orange: '#FF8F3E',
      purple: '#C92579',
      red: '#EA2B37',
      darkGreen: '#2DA149',
      lightGreen: '#229259',
      yellow: '#FFCA10',
      indigo: '#555AC3',
      biruze: '#2C7B95',
      darkBlue: '#497AC3',
      blue: '#3371BA',
    };

    const theme = ref('default');

    provide('themes', themes);
    provide('theme', theme);
    provide('switchTheme', (name) => {
      theme.value = name;
    });

    const bg = ref('blue');
    const menuActive = ref(0);
    const fullPage = ref(null);

    const changeBg = (index) => {
      const isMobile = Screen.lt.xl;

      let val;
      if (isMobile) {
        index === 0 ? (val = 'blue') : (val = '');
      } else {
        switch (index) {
          case 0:
            val = 'blue';
            theme.value = 'default';
            break;
          case 1:
            val = isMobile ? 'standart' : 'dark-blue';
            theme.value = 'default';
            break;
          case 2:
            val = 'green';
            theme.value = 'darkGreen';
            break;
        }
      }

      bg.value = val;
      menuActive.value = index;
    };

    const toSection = (index) => {
      fullPage.value.toByIndex(index);
    };

    return {
      bg,
      menuActive,
      fullPage,
      changeBg,
      toSection,
    };
  },
  components: {
    LandingSectionAdvantages,
    LandingSectionFeatures,
    LandngSectionNews,
    HeaderLanding,
    LandingMenu,
    FooterLanding,
    LandingSectionProjects,
    LandingSectionEcosystem,
  },
};
</script>
<style scoped lang="scss">
.landing-bg-image {
  position: fixed;
  z-index: -1;
  width: 110%;
  height: 110%;
  left: 0;
  top: -30px;
}
</style>
