<template>
  <q-layout
    :view="$q.screen.lt.xl ? 'hhh lpR fff' : 'hhh lpR fFf'"
    class="tw-bg-dark-blue-cover"
  >
    <HeaderLanding />

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer v-if="$q.screen.lt.xl">
      <div class="tw-container">
        <div class="tw-pb-14 tw-pt-4 tw-border-t tw-border-dark-blue">
          <div class="tw-mb-9 app-row app-gutter-col tw-justify-between">
            <div v-for="half in footerHalfs" class="app-col-6">
              <AppLink
                class="tw-block tw-text-white tw-py-2"
                v-for="link in half"
                :to="link.to"
                :key="link.label"
                >{{ link.label }}</AppLink
              >
            </div>
          </div>
          <HeaderBaseFooter />
        </div>
      </div>
    </q-footer>
    <FooterLanding v-else />
  </q-layout>
</template>

<script>
import HeaderBaseFooter from 'src/layouts/HeaderBaseFooter.vue';
import HeaderLanding from 'src/layouts/HeaderLanding.vue';
import FooterLanding from 'src/layouts/FooterLanding.vue';
import useTheme from 'src/composition/useTheme';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

export default {
  setup() {
    useTheme();
    const store = useStore();
    const { t } = useI18n();

    const footerHalfs = computed(() => {
      const footer = store.getters['landing/footer'](t);
      const half = Math.ceil(footer.length / 2);
      const list = [
        footer.slice(0, half),
        footer.slice((footer.length - half) * -1),
      ];

      return list;
    });

    return {
      t,
      footerHalfs,
    };
  },
  components: {
    HeaderBaseFooter,
    HeaderLanding,
    FooterLanding,
  },
};
</script>

<style>
</style>
