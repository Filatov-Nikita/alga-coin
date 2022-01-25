<template>
  <div class="nav-menu">
    <div class="nav-menu__links app-row">
      <router-link
        v-for="item in items($t)"
        :key="item.to"
        :to="item.to"
        custom
        v-slot="{ href, navigate, isExactActive }"
      >
        <a
          class="nav-menu__link"
          :class="{ 'nav-menu__link--active': isExactActive }"
          :href="href"
          @click="navigate"
          >{{ item.label }}</a
        >
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const items = (t) => [
      {
        label: t('lk.menu.wallet'),
        to: { name: 'wallet' },
      },
      {
        label: t('lk.menu.history'),
        to: { name: 'history' },
      },
      {
        label: t('lk.menu.output'),
        to: { name: 'output' },
      },
    ];

    return {
      items,
    };
  },
};
</script>

<style scoped lang="scss">
//$

.nav-menu {
  @apply tw-bg-dark tw-rounded-base tw-px-8;

  &__links {
    @include gutter-x(24px);
  }

  &__link {
    @apply tw-text-white tw-py-4-1 tw-relative;
    transition: color, 0.3s;

    &:hover {
      @apply tw-text-blue-hover;
    }

    &--active {
      &::after {
        content: '';
        height: 2px;
        @apply tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-bg-blue-hover tw-rounded-base;
      }
    }
  }
}
</style>
