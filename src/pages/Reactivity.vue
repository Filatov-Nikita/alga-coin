<template>
  <div>
    <AppRInput v-model="t" />
  </div>
</template>

<script>
import AppRInput from 'src/core/AppRInput.vue';

export default {
  mounted() {
    setTimeout(() => {
      this.t = '2';
    }, 1000);
  },
  data() {
    return {
      t: '1',
    };
  },
  components: {
    AppRInput,
  },
};
</script>
