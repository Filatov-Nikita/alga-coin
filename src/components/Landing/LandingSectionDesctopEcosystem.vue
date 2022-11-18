<template>
  <AppFullPageScreen
    name="eco-start"
    class="tw-py-2 tw-relative landing-h-center"
  >
    <div class="landing-h2--space">
      <h2 class="landing-h2 tw-mb-9">{{ t("header") }}</h2>
      <p class="tw-max-w-sm">{{ t("description") }}</p>
    </div>

    <div class="landing-c-up tw-flex tw-justify-between">
      <div></div>
      <div class="eco-start__icons">
        <article
          class="eco-start__icon"
          v-for="icon in icons"
          :key="icon.name"
          :style="{ top: icon.y, left: icon.x }"
          @click="setVal(icon.value)"
          @mouseenter="activeItem = icon.value"
          @mouseleave="activeItem = null"
        >
          <div class="eco-start__img">
            <InlineSvg :src="icon.icon" class="tw-mx-auto" />
          </div>
          <h3 class="tw-text-xs">{{ icon.name }}</h3>
        </article>
      </div>

      <div v-if="$q.screen.xl" class="landing-eco-right">
        <button
          class="landing-icon-cover"
          :class="{ 'landing-icon-cover--active': activeItem === icon.value }"
          v-for="icon in icons"
          :key="icon.name"
          @mouseleave="activeItem = null"
          @mouseenter="activeItem = icon.value"
          @click="setVal(icon.value)"
        >
          <InlineSvg
            :src="icon.icon"
            :fill="activeItem === icon.value ? icon.logoColor : '#0A1E3E'"
            class="tw-mx-auto"
            :class="{
              'tw-opacity-40': activeItem !== icon.value,
            }"
          />
          <!-- <LandingLogo
            class="tw-mx-auto"
            width="28px"
            height="30px"
            v-bind="
              activeItem === icon.value
                ? { fill: icon.logoColor }
                : { fillHex: '#0A1E3E' }
            "
          /> -->
        </button>
      </div>
    </div>
  </AppFullPageScreen>
</template>

<script>
import { markRaw } from "vue";
import LandingLogo from "./LandingLogo.vue";
import { useI18n } from "vue-i18n";

const i18n = {
  messages: {
    "en-US": {
      header: "ECOSYSTEM",
      description:
        "Alga Ecosystem aims to become one of the strongest communities in the world for creating safe, environmentally friendly and cost-effective projects in the future",
    },
    "ru-RU": {
      header: "ЭКОСИСТЕМА",
      description:
        "Alga Ecosystem стремится стать одним из сильнейших сообществ в мире для создания безопасных, экологичных и рентабельных проектов в будущем",
    },
  },
};

export default {
  setup() {
    const { t } = useI18n(i18n);

    const icons = markRaw([
      {
        name: "Alga Invest",
        x: "104px",
        y: "0px",
        value: "INVEST",
        logoColor: "#F8C61E",
        icon: require("assets/icons/eco-invest.svg"),
      },
      {
        name: "Alga Market",
        x: "148px",
        y: "145px",
        value: "MARKET",
        logoColor: "#C92579",
        icon: require("assets/icons/eco-market.svg"),
      },
      {
        name: "Alga Health",
        x: "0px",
        y: "267px",
        value: "HEALTH",
        icon: require("assets/icons/eco-health.svg"),
        logoColor: "#EA2B37",
      },
      {
        name: "Alga Education",
        x: "79px",
        y: "428px",
        value: "EDUCATION",
        icon: require("assets/icons/eco-edu.svg"),
        logoColor: "#2DA149",
      },

      {
        name: "Alga Development",
        x: "325px",
        y: "24px",
        value: "DEVELOPMENT",
        icon: require("assets/icons/eco-dev.svg"),
        logoColor: "#FF8F3E",
      },
      {
        name: "Alga Help",
        x: "487px",
        y: "63px",
        value: "BANKING",
        icon: require("assets/icons/eco-bank.svg"),
        logoColor: "#5B9FEF",
      },
      {
        name: "Alga NFT",
        x: "421px",
        y: "183px",
        value: "NFT",
        icon: require("assets/icons/eco-nft.svg"),
        logoColor: "#555AC3",
      },
      {
        name: "Alga Starlink",
        x: "476px",
        y: "318px",
        value: "STARLINK",
        icon: require("assets/icons/eco-starlink.svg"),
        logoColor: "#2C7B95",
      },
      {
        name: "Alga Consulting",
        x: "293px",
        y: "408px",
        value: "CONSULTING",
        icon: require("assets/icons/eco-case.svg"),
        logoColor: "#497AC3",
      },
      {
        name: "Alga Ecology",
        x: "443px",
        y: "443px",
        value: "ECOLOGY",
        logoColor: "#13B862",
        icon: require("assets/icons/eco-eco.svg"),
      },
    ]);

    return { icons, t };
  },
  data() {
    return {
      activeItem: null,
    };
  },
  methods: {
    setVal(value) {
      this.$store.commit("landing/setEco", value);
      this.$router.push({ query: { section: "ecosystem" } });
    },
  },
  components: {
    LandingLogo,
  },
};
</script>

<style scoped lang="scss">
//$

.eco-start {
  &__icons {
    width: 378px;
    height: 491px;
    @apply tw-relative;
  }

  &__img {
    @apply tw-mr-3-1;
  }

  &__icon {
    width: 48px;
    height: 48px;
    line-height: 40px;
    transition: width 200ms;
    @apply tw-absolute tw-border-4 tw-border-secondary tw-rounded-full tw-bg-blue tw-text-center tw-cursor-pointer tw-flex tw-items-center tw-pr-7 tw-pl-1;

    h3 {
      @apply tw-hidden tw-whitespace-nowrap;
    }

    &:hover {
      width: 220px;

      h3 {
        @apply tw-block;
      }

      .eco-start__img {
        svg {
          fill: #fff;
        }
      }
    }
  }
}
</style>
