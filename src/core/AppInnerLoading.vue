<template>
  <q-inner-loading class="app-inner-loading" v-bind="$props">
    <q-spinner class="tw-text-primary" size="3em" />
  </q-inner-loading>
</template>

<script>
import { QInnerLoading } from 'quasar/src/components/inner-loading';

export default {
  props: {
    ...QInnerLoading.props,
  },
};
</script>

<style scoped>
.app-inner-loading {
  background: none !important;
}
</style>
