<template>
  <q-layout class="base-layout">
    <q-header class="tw-py-4-1">
      <div class="app-container">
        <img class="logo" src="~assets/images/app-logo.svg" alt="логотип" />
      </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style scoped>
.base-layout {
  background: #001233;
}

.logo {
  width: 100px;
}
</style>
