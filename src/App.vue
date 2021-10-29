<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';
import {show} from 'src/api/profile';

export default defineComponent({
  name: 'App',
  async created() {
    this.$store.dispatch('profile/show');
    this.$store.dispatch('wallet/show');
    console.log(await show());
  },
});
</script>
