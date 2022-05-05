<template>
  <q-layout
    :view="$q.screen.xl ? 'hHh lpR fFf' : 'hhh lpR fFf'"
    class="bg-color tw-relative tw-z-10"
    :style="
      !$q.screen.xl
        ? {
            background:
              'linear-gradient(110.9deg, #0F1530 1.02%, #090F2B 94.69%)',
            position: 'relative',
          }
        : ''
    "
  >
    <!-- <HeaderLanding v-if="$q.screen.xl">
      <template #menu>
        <LandingMenu :activeIndex="menuActive" @to="toSection" />
      </template>
    </HeaderLanding>
    <q-page-container v-if="$q.screen.xl">
      <q-page v-if="!Loading.isActive">
        <div class="tw-container">
          <AppFullPage
            v-if="$q.screen.xl"
            ref="fullPage"
            @changeIndex="changeBg"
            :key="$q.screen.xl ? 'xl' : '0'"
          >
            <LandingSectionAdvantages />
            <LandingSectionFeatures />

            <LandingSectionDesctopEcosystem v-if="$q.screen.xl" />
            <LandingSectionEcosystem />
            <LandingSectionProjects />
            <LandngSectionNews />
            <LandngSectionMobileFooter v-if="$q.screen.lt.xl" />
          </AppFullPage>
        </div>
      </q-page>
    </q-page-container> -->
    <!-- <template v-if="!$q.screen.xl"> -->
    <InvestLanding />
    <!-- <div @click="scrollTop" class="top-arrow" ref="arrow">
        <div class="arrow-icon">
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 7L7 1L1 7" stroke="white" stroke-linecap="round" />
          </svg>
        </div>
      </div>
      <div class="header__wrapper">
        <HeaderLanding class="">
          <template #menu>
            <LandingMenu :activeIndex="menuActive" @to="toSection" />
          </template>
        </HeaderLanding>
        <q-page-container>
          <div class="tw-container">
            <LandingSectionAdvantages />
          </div>
        </q-page-container>
      </div>
      <q-page-container>
        <div class="tw-container">
          <LandingSectionFeatures />
          <LandingSectionEcosystem />
          <LandingSectionProjects />
          <LandngSectionNews />
          <LandngSectionMobileFooter />
        </div>
      </q-page-container> -->
    <!-- </template> -->
    <!-- <FooterLanding /> -->

    <!-- <transition
      enter-active-class="animated fadeIn"
      enter-leave-class="animated fadeOut"
      mode="in-out"
    >
      <div
        class="anim-bg anim-bg__blue"
        v-if="!$q.screen.lt.xl && bg === 'blue'"
      ></div>
      <div
        class="anim-bg anim-bg__dark-blue"
        v-else-if="!$q.screen.lt.xl && bg === 'dark-blue'"
      ></div>
      <div
        class="anim-bg anim-bg__orange"
        v-else-if="!$q.screen.lt.xl && bg === 'orange'"
      ></div>
      <div
        class="anim-bg anim-bg__red"
        v-else-if="!$q.screen.lt.xl && bg === 'red'"
      ></div>
      <div
        class="anim-bg anim-bg__purple"
        v-else-if="!$q.screen.lt.xl && bg === 'purple'"
      ></div>
      <div
        class="anim-bg anim-bg__green"
        v-else-if="!$q.screen.lt.xl && bg === 'green'"
      ></div>
      <div
        class="anim-bg anim-bg__biruze"
        v-else-if="!$q.screen.lt.xl && bg === 'biruze'"
      ></div>
      <div
        class="anim-bg anim-bg__light-green"
        v-else-if="!$q.screen.lt.xl && bg === 'light-green'"
      ></div>
      <div
        class="anim-bg anim-bg__indigo"
        v-else-if="!$q.screen.lt.xl && bg === 'indigo'"
      ></div>
      <div
        class="anim-bg anim-bg__yellow"
        v-else-if="!$q.screen.lt.xl && bg === 'yellow'"
      ></div>
    </transition> -->
    <!-- <InlineSvg
      v-if="$q.screen.xl"
      class="landing-bg-image"
      :src="require('assets/images/landing/main-bg.svg')"
    /> -->
  </q-layout>
</template>

<script>
import InvestLanding from "src/components/InvestLanding";
import LandingSectionAdvantages from "src/components/Landing/LandingSectionAdvantages.vue";
import LandingSectionFeatures from "src/components/Landing/LandingSectionFeatures.vue";
import LandingSectionOwners from "src/components/Landing/LandingSectionOwners.vue";
import LandingSectionEcosystem from "src/components/Landing/LandingSectionEcosystem.vue";
import LandingSectionDesctopEcosystem from "src/components/Landing/LandingSectionDesctopEcosystem.vue";
import LandingSectionProjects from "src/components/Landing/LandingSectionProjects.vue";
import LandngSectionNews from "src/components/Landing/LandngSectionNews.vue";
import LandngSectionMobileFooter from "src/components/Landing/LandngSectionMobileFooter.vue";
import FooterLanding from "src/layouts/FooterLanding.vue";
import HeaderLanding from "src/layouts/HeaderLanding.vue";
import LandingMenu from "src/components/Landing/LandingMenu.vue";
import useTheme from "src/composition/useTheme";
import { useStore } from "vuex";
import { Screen, useQuasar } from "quasar";
import { ref, provide, reactive, onUnmounted, watchEffect } from "vue";

export default {
  setup() {
    const arrow = ref();
    const $q = useQuasar();
    const store = useStore();
    const { theme } = useTheme();
    const bg = ref("blue");
    const menuActive = ref(0);
    const scroll = ref(false);
    const fullPage = ref(null);
    (async () => {
      $q.loading.show();
      try {
        await Promise.all([
          store.dispatch("landing/newsList"),
          store.dispatch("landing/projectsList"),
        ]);
      } catch (e) {
        throw e;
      } finally {
        $q.loading.hide();
      }
    })();

    const screenBgColors = reactive({
      0: "blue",
      1: "dark-blue",
      2: "blue",
      3: "dark-blue",
      4: "blue",
      5: "blue",
      6: "dark-blue",
    });

    const screenTheme = reactive({
      0: "default",
      1: "default",
      2: "default",
      3: "default",
      4: "blue",
      5: "default",
      6: "default",
    });

    provide("updateBg", (name) => {
      bg.value = name;
      screenBgColors[menuActive.value] = name;
    });

    provide("screenActiveIndex", menuActive);

    provide("updateTheme", (name) => {
      const isMobile = Screen.lt.xl;
      if (isMobile && ![0, 2, 3].includes(menuActive.value)) return;

      theme.value = name;
      screenTheme[menuActive.value] = name;
    });

    const changeBg = (index) => {
      const isMobile = Screen.lt.xl;

      let newBg = screenBgColors[index];
      if (isMobile && ![0, 2, 3].includes(index)) newBg = "";

      bg.value = newBg;
      theme.value = screenTheme[index];
      menuActive.value = index;
    };

    const toSection = (index) => {
      fullPage.value.toByIndex(index);
    };
    watchEffect(() => {});

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 20) {
        if (arrow.value) {
          if (arrow.value?.classList.contains("hidden-arrow"))
            arrow.value?.classList.remove("hidden-arrow");
          if (!arrow.value?.classList.contains("show-arrow")) {
            arrow.value.style.display = "block";
            arrow.value?.classList.add("show-arrow");
            scroll.value = true;
          }
        }
        arrow.value?.classList.add("article");
      } else {
        if (arrow.value) {
          if (arrow.value?.classList.contains("show-arrow"))
            arrow.value?.classList.remove("show-arrow");
          if (!arrow.value?.classList.contains("hidden-arrow")) {
            arrow.value?.classList.add("hidden-arrow");
            console.log(window.pageYOffset);
            setTimeout(() => {
              if (arrow.value?.classList.contains("hidden-arrow"))
                arrow.value.style.display = "none";
            }, 1100);
          }
        }
      }
    });
    const scrollTop = () => window.scrollTo(pageYOffset, 0);

    onUnmounted(() => {
      store.commit("landing/setEco", "BANKING");
    });

    return {
      scrollTop,
      arrow,
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
    InvestLanding,
  },
};
</script>
<style scoped lang="scss">
.header__wrapper {
  background: linear-gradient(
    149.13deg,
    #0a1e3e 0.09%,
    #045093 55.25%,
    #0a1e3e 100%
  );
}
.landing-bg-image {
  position: fixed;
  z-index: -1;
  width: 875px;
  height: 110%;
  left: 50%;
  top: -30px;
  transform: translateX(-50%);
}
.arrow-icon {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.top-arrow {
  position: fixed;
  width: 48px;
  height: 48px;
  border-radius: 9999px;
  background-color: #003870;
  right: 25px;
  bottom: 56px;
  z-index: 1000;
  display: none;
  opacity: 0;
}

.show-arrow {
  animation: showarrow 1s ease-in-out;
  opacity: 1;
}
.hidden-arrow {
  animation: hiddenarrow 1s ease-in-out;
  opacity: 0;
}
@keyframes showarrow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes hiddenarrow {
  0% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
  }
}
</style>
