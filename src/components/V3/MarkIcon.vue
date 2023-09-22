<template>
  <img
    v-if="conditionMark === 1"
    :src="require('assets/icons/up.svg')"
    alt=""
  />
  <img
    v-else-if="conditionMark === -1"
    :src="require('assets/icons/down.svg')"
    alt=""
  />
</template>

<script>
export default {
  props: {
    mark: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    conditionMark() {
      return Math.sign(+this.mark);
    },
  },
};
</script>

<style></style>
