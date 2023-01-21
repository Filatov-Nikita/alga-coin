<template>
  <q-layout style="min-height: 100vh" class="app-page-bg" view="hhh lpr lff">
    <q-header>
      <Header></Header>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      <Footer></Footer>
    </q-footer>
  </q-layout>
</template>

<script>
import Header from "../Landing/HeaderLayout.vue";
import Footer from "../Landing/FooterLayout.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
