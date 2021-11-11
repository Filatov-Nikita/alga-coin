<template>
  <div class="app-full-page" ref="page" :style="styles">
    <slot />
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import useFullPage from 'src/composition/useFullPage';

export default {
  emits: ['changeIndex'],
  setup(props, { emit }) {
    const page = ref(null);

    const { styles, sectionIndex, toByIndex } = useFullPage(page);

    watch(sectionIndex, (val) => {
      emit('changeIndex', val);
    });

    return {
      page,
      styles,
      toByIndex
    };
  },
};
</script>

<style scoped>
.app-full-page {
  transition: transform, 0.5s;
  touch-action: none;
  overflow: hidden;
}
</style>
