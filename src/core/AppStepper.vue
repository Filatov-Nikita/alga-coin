<template>
  <slot v-bind="{ next, prev, step, total, index }" />
</template>

<script>
import { ref, provide, computed } from 'vue';

export default {
  props: {
    modelValue: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const steps = ref([]);
    const currentStep = ref(props.modelValue || '');

    const setStep = (name) => {
      if (steps.value.length <= 0 && currentStep.value === '')
        currentStep.value = name;
      steps.value.push(name);
    };

    const stepMap = computed(() => {
      return steps.value.reduce((acc, step, index) => {
        acc[step] = index;
        return acc;
      }, {});
    });

    const total = computed(() => {
      return steps.value.length;
    });

    const index = computed(() => {
      return stepMap.value[currentStep.value];
    });

    const next = (to) => {
      if (index.value >= steps.value.length - 1) return;
      currentStep.value = to || steps.value[index.value + 1];
      emit('update:modelValue', currentStep.value);
    };

    const prev = () => {
      if (index.value <= 0) return;
      currentStep.value = steps.value[index.value - 1];
      emit('update:modelValue', currentStep.value);
    };

    provide('setStep', setStep);
    provide('currentStep', currentStep);

    return {
      next,
      prev,
      step: currentStep,
      total,
      index,
    };
  },
};
</script>

<style>
</style>
