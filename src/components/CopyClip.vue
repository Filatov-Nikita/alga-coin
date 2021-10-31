<template>
  <button @click="copy">
    <InlineSvg :src="require('assets/copy.svg')" />
  </button>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      type: String,
    },
    message: {
      required: true,
      type: String,
    },
  },
  methods: {
    copy() {
      navigator.clipboard.writeText(this.value);
      this.$alert({
        type: 'neutral',
        message: this.message,
      });
    },
  },
};
</script>

<style>
</style>
