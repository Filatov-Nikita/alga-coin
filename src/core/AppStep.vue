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
    const curStep = inject('step');

    return {
      step: curStep,
    };
  },
};
</script>
