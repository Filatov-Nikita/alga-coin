<template>
  <a :href="to" v-if="isExternalLink">
    <slot>{{ label }}</slot>
  </a>
  <router-link v-else v-bind="$props">
    <slot>{{ label }}</slot>
  </router-link>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'AppLink',
  props: {
    ...RouterLink.props,
    label: {
      default: undefined,
      type: String,
    },
  },
  computed: {
    isExternalLink() {
      return typeof this.to === 'string' && this.to.startsWith('http');
    },
  },
};
</script>
