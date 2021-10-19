<template>
  <q-layout class="base-layout" view="lhh lpR fFf">
    <BaseHeader />
    <q-page-container>
      <router-view :value="test" />
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
  data() {
    return {
      test: '2',
    };
  },
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
