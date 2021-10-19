<template>
  <slot v-if="currentStep === name" />
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
  setup(props) {
    const setStep = inject('setStep');
    const currentStep = inject('currentStep');
    setStep(props.name);

    return { currentStep };
  },
};
</script>

<style>
</style>
