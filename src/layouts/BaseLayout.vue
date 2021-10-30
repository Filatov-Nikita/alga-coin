<template>
  <q-layout
    class="app-page-bg"
    :view="$q.screen.xl ? 'lhh lpR fff' : 'lhh lpR fFf'"
  >
    <BaseHeader />
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      <div v-if="$q.screen.xl">
        <div class="tw-container">
          <div class="header-desktop">
            <span> Alga© {{ $fullYear }} </span>
            <AppLink to="#" target="_blank">Условия обслуживания</AppLink>
          </div>
        </div>
      </div>
      <TheBottomMenu v-else-if="$q.screen.lt.xl" />
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
//$

.header-desktop {
  @apply tw-py-5;
  @include row();
  @include space-x(68px);
}
</style>
