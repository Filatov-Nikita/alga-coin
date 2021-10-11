<template>
  <q-layout class="base-layout">
    <BaseHeader />
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      <TheBottomMenu class="xl:tw-hidden" />
    </q-footer>
  </q-layout>
</template>

<script>
import TheBottomMenu from 'src/components/TheBottomMenu.vue';
import BaseHeader from './parts/BaseHeader.vue';

export default {
  components: {
    TheBottomMenu,
    BaseHeader,
  },
};
</script>

<style scoped lang="scss">
.base-layout {
  @apply tw-bg-dark-blue-cover;
}
</style>
