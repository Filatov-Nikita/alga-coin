<template>
  <slot v-if="name === step.name" />
</template>

<script>
import useStepCore from 'src/composition/useStepCore';

export default {
  props: {
    name: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const { step } = useStepCore(props.name, 'AppStep');
    return { step };
  },
};
</script>
