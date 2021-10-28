<template>
  <slot v-if="name === step" />
</template>

<script>
import { inject } from 'vue';

export default {
  props: {
    name: {
      required: true,
      type: String,
    },
  },
  setup() {
    const step = inject('step');
    return { step };
  },
};
</script>
