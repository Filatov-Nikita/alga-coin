<template>
  <q-layout class="base-layout app-page-bg" view="lhh lpR fFf">
    <BaseHeader />
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      <div v-if="$q.screen.xl">
        <div class="tw-container">
          <div class="header-desktop">
            <span> Alga© {{ year }} </span>
            <AppLink to="#">Условия обслуживания</AppLink>
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
  setup() {
    const year = new Date().getFullYear();
    return {
      year,
    };
  },
  components: {
    TheBottomMenu,
    BaseHeader,
  },
};
</script>

<style scoped lang="scss">
//$

.base-layout {
  @apply tw-bg-dark-blue-cover;
}

.header-desktop {
  @apply tw-py-5;
  @include row();
  @include space-x(68px);
}
</style>
