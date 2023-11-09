<template>
  <!-- <q-layout
    :view="$q.screen.xl ? 'hHh lpR fFf' : 'hhh lpR fFf'"
    class="bg-color tw-relative tw-z-10"
  > -->
  <V3LangingRedisign />
  <!-- </q-layout> -->
</template>

<script>
import V3Langing from "src/components/V3Langing/index";
import V3LangingRedisign from "src/components/V3LangingRedisign/index";
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
    V3Langing,
    V3LangingRedisign,
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
