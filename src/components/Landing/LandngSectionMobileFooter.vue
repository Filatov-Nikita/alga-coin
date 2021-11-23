<template>
  <AppFullPageScreen name="mobile-footer" class="tw-pt-8 tw-flex tw-flex-col tw-justify-between tw-relative">
    <div></div>
    <div class="tw-space-y-1">
      <AppLink
        class="tw-block tw-py-4 tw-text-white tw-text-xs"
        v-for="link in footer"
        :key="link.label"
        :to="link.to"
      >
        {{ link.label }}
      </AppLink>
    </div>
    <HeaderBaseFooter class="tw-pb-10" />
  </AppFullPageScreen>
</template>

<script>
import HeaderBaseFooter from 'src/layouts/HeaderBaseFooter';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('landing', ['footer']),
  },
  components: {
    HeaderBaseFooter,
  },
};
</script>

<style>
</style>
