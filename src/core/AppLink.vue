<template>
  <router-link :to="to" class="app-link" :class="`tw-text-${size}`">
    <slot>{{ label }}</slot>
  </router-link>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  props: {
    ...RouterLink.props,
    external: {
      default: false,
      type: Boolean,
    },
    label: {
      default: undefined,
      type: String,
    },
    size: {
      default: 'xs',
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.app-link {
  @apply tw-text-secondary;

  &:hover {
    @apply tw-text-primary;
  }

  &:active {
    @apply tw-text-dark-blue;
  }
}
</style>
