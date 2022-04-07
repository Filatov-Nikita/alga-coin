<template>
  <AppFullPageScreen
    name="mobile-footer"
    class="mobile-footer landing-h-between tw-relative"
  >
    <div></div>
    <div class="tw-text-center">
      <AppLink
        class="tw-block tw-py-4 tw-text-white tw-text-xs"
        v-for="link in footer($t)"
        :key="link.label"
        :to="link.to"
        :popup="link.popup"
        :modalMessage="link.modalMessage"
      >
        {{ link.label }}
      </AppLink>
    </div>
    <HeaderBaseFooter class="tw-pb-10" :footer="true" />
  </AppFullPageScreen>
</template>

<script>
import HeaderBaseFooter from "src/layouts/HeaderBaseFooter";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("landing", ["footer"]),
  },
  components: {
    HeaderBaseFooter,
  },
};
</script>

<style lang="scss" scoped>
.mobile-footer {
  padding-top: 80px;
}
</style>
