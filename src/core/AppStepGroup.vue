<template>
  <slot
    :next="next"
    :prev="prev"
    v-if="step === 'root' || step.name === name"
  />
</template>

<script>
import useSteps from 'src/composition/useSteps';
import useStepCore from 'src/composition/useStepCore';

export default {
  props: {
    name: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const { state, next, prev } = useSteps();
    const { step, parentPrev } = useStepCore(props.name, 'AppStepGroup');

    return {
      state,
      step,
      next,
      prev: () => {
        if (prev() === false) {
          parentPrev && parentPrev();
        }
      },
    };
  },
};
</script>
