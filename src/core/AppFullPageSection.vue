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

export default {
  setup() {
    const { header } = inject('_q_l_');
    const height = ref(0);

    const updateHeight = () => {
      height.value = window.innerHeight;
    };

    watchEffect(() => {
      updateHeight();
    });

    onMounted(() => {
      window.addEventListener('resize', updateHeight);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', updateHeight);
    });

    const styles = computed(() => {
      return {
        height: `${height.value}px`,
        paddingBottom: `${header.offset}px`
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
  overflow: hidden;
}
</style>
