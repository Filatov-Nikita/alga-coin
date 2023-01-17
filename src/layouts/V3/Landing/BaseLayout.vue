<template>
  <q-layout
    style="min-height: 100vh"
    view="hhh lPr lff"
    class="app-page-bg--dark"
  >
    <!-- <q-header>
      <Header></Header>
    </q-header> -->
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      <Footer></Footer>
    </q-footer>
  </q-layout>
</template>

<script>
import Header from "./HeaderLayout.vue";
import Footer from "./FooterLayoutRedisign.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
