<template>
  <q-page class="tw-p-9">
    <ClockFace />
  </q-page>
</template>

<script>
import ClockFace from 'src/components/Clock/ClockFace.vue';

export default {
  setup() {
    function getStartTime() {
      // fetch('')
    }
  },
  components: {
    ClockFace,
  },
};
</script>

<style>
</style>
