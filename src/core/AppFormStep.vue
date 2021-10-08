<template>
  <div v-if="shouldShow">
    <slot />
  </div>
</template>

<script>
import { computed, inject } from 'vue';
export default {
  props: {
    name: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const currentIdx = inject('STEP_COUNTER').value++;
    const formStepIdx = inject('CURRENT_STEP_INDEX');
    const puhsName = inject('PUSH_NAME');

    puhsName(props.name);

    const shouldShow = computed(() => {
      return currentIdx === formStepIdx.value;
    });

    return {
      shouldShow,
    };
  },
};
</script>
