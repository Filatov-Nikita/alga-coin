<template>
  <div class="full-page-section" :style="styles">
    <slot />
  </div>
</template>

<script>
import {
  ref,
  onMounted,
  onUnmounted,
  computed,
  inject,
  watchEffect,
} from 'vue';
import { throttle } from "src/helpers/perfomance";

export default {
  props: {
    name: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const registrSection = inject('registrSection');
    const removeSection = inject('removeSection');
    registrSection(props.name);

    const { header } = inject('_q_l_');
    const height = ref(0);

    const updateHeight = () => {
      height.value = window.innerHeight;
    };

    watchEffect(() => {
      updateHeight();
    });

    const optimized = throttle(updateHeight, 50);

    onMounted(() => {
      window.addEventListener('resize', optimized);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', optimized);
      removeSection(props.name);
    });

    const styles = computed(() => {
      return {
        height: `${height.value}px`,
        paddingBottom: `${header.offset}px`,
      };
    });

    return {
      styles,
    };
  },
};
</script>

<style scoped lang="scss">
.full-page-section {
  // overflow: hidden;
}
</style>
