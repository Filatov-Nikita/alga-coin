<template>
  <q-layout class="app-page-bg_auth" view="lhh lpR fFf">
    <q-header>
      <div class="tw-container">
        <div class=" tw-flex tw-items-center tw-justify-between">
          <a href="#" class="app-logo-2 tw-block tw-py-5">
            <img class="app-logo-i" src="~assets/images/logo-v3.svg" />
          </a>
          <Locale />
        </div>
      </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Locale from "src/components/V3/LocaleButtonsRedisign.vue";
export default {
  components: {
    Locale,
  },
};
</script>

<style></style>
