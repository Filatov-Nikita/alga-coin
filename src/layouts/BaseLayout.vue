<template>
  <q-layout class="base-layout">
    <q-page-container>
      <img src="~assets/images/app-logo.svg" alt="" />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style scoped>
.base-layout {
  @apply tw-bg-dark;
}
</style>
