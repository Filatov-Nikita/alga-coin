<template>
  <q-layout
    class="app-page-bg"
    :view="$q.screen.xl ? 'lhh lpR fff' : 'lhh lpR fFf'"
  >
    <HeaderBase />
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      <div v-if="$q.screen.xl">
        <div class="tw-container">
          <div class="header-desktop">
            <span> Alga© {{ $fullYear }} </span>
            <AppLink to="#" target="_blank">{{$t('landing.footer.serviceInfo')}}</AppLink>
          </div>
        </div>
      </div>
      <TheBottomMenu v-else-if="$q.screen.lt.xl" />
    </q-footer>
  </q-layout>
</template>

<script>
import TheBottomMenu from 'src/components/TheBottomMenu.vue';
import HeaderBase from './HeaderBase.vue';

export default {
  components: {
    TheBottomMenu,
    HeaderBase,
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
