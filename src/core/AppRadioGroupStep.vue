<template>
  <slot v-if="step === 'root' || step.name === name" />
</template>

<script>
import useStepsRadio from 'src/composition/useStepsRadio';
import useStepCore from 'src/composition/useStepCore';

export default {
  props: {
    name: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const { state, show } = useStepsRadio();
    const { step } = useStepCore(props.name, 'AppRadioGroupStep', {
      show,
    });

    return {
      state,
      step,
    };
  },
};
</script>

<style>
</style>
