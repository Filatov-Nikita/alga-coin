<template></template>
<script setup>
import { ref } from "vue";
const active = ref(1);
</script>
<style scoped lang="scss">
//$
.btns {
  @apply tw-border tw-border-green tw-overflow-hidden;
  height: 50px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.08);
  width: fit-content;
  &_sm {
    height: 41px;
  }
  & .active {
    @apply tw-bg-green tw-rounded-lg2;
  }
}
</style>
