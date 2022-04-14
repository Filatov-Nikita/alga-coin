<template>
  <div class="bottom-menu">
    <div class="bottom-menu__active">
      <InlineSvg
        @loaded="calcIndicatorCoords"
        :src="require('assets/menu-active.svg')"
      />
    </div>
    <div class="bottom-menu__links">
      <div class="tw-pb-safe">
        <div class="bottom-menu__list">
          <router-link
            custom
            v-slot="{ navigate, href, isExactActive }"
            v-for="(item, index) in items"
            :key="item.to"
            :to="item.to"
          >
            <a
              :href="href"
              @click="nav($event, navigate)"
              class="bottom-menu__link"
              :class="[
                { 'tw-mr-8': index !== items.length - 1 },
                { 'bottom-menu__link--active': isExactActive },
              ]"
            >
              <div
                class="tw-mx-auto"
                :style="{ width: '16px', height: '16px' }"
              >
                <InlineSvg
                  @loaded="calcIndicatorCoords"
                  class="bottom-menu__icon"
                  :src="isExactActive ? item.iconActive : item.icon"
                />
              </div>
              <div class="bottom-menu__label">{{ item.label }}</div>
            </a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
function calcIndicatorCoords() {
  const list = document.querySelector(".bottom-menu__list");
  const activeEl = list && list.querySelector(".bottom-menu__link--active");
  const indicator = document.querySelector(".bottom-menu__active");

  if (!activeEl) {
    indicator.style.left = "-1000px";
    return;
  }

  indicator.style.left = `${
    activeEl.offsetLeft + activeEl.offsetWidth / 2 - indicator.offsetWidth / 2
  }px`;
}

function calcWait() {
  setTimeout(calcIndicatorCoords, 50);
}

export default {
  mounted() {
    window.addEventListener("resize", calcIndicatorCoords);
  },
  unmounted() {
    window.addEventListener("resize", calcIndicatorCoords);
  },
  computed: {
    items() {
      return [
        {
          label: this.$t("lk.menu.wallet"),
          to: { name: "wallet" },
          icon: require("assets/icons/alga.svg"),
          iconActive: require("assets/icons/alga-active.svg"),
        },
        {
          label: this.$t("lk.menu.history"),
          to: { name: "history" },
          icon: require("assets/icons/history.svg"),
          iconActive: require("assets/icons/history-active.svg"),
        },
        {
          label: this.$t("lk.menu.output"),
          to: { name: "output" },
          icon: require("assets/icons/output.svg"),
          iconActive: require("assets/icons/output-active.svg"),
        },
      ];
    },
  },
  methods: {
    async nav(e, navigate) {
      await navigate(e);
      this.$nextTick(calcIndicatorCoords());
    },
    calcIndicatorCoords: calcWait,
  },
  watch: {
    $route() {
      this.$nextTick(calcIndicatorCoords());
    },
  },
};
</script>

<style scoped lang="scss">
.bottom-menu {
  @apply tw-pt-3 tw-relative;

  &__links {
    border-radius: 12px 12px 0px 0px;
    padding-bottom: 9px;
    @apply tw-bg-dark tw-pt-2;
  }

  &__list {
    @apply tw-flex tw-justify-center;
  }

  &__label {
    font-size: 10px;
    line-height: 11px;
    margin-top: 8px;
    @apply tw-text-white;
  }

  &__icon {
    @apply tw-mx-auto;
  }

  &__link {
    &--2 {
      margin-right: 35px;
    }

    &--active {
      svg {
        fill: linear-gradient(52.21deg, #005baa 11.85%, #00c2f3 81.63%);
      }
    }
  }

  &__active {
    transition: left, 0.2s;
    @apply tw-absolute tw-top-0;
  }
}
</style>
