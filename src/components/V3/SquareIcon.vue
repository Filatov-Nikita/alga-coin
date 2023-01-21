<template>
  <div class="square" :style="{ background: fill }">
    {{ text }}{{ textAfter }}
  </div>
</template>

<script>
export default {
  props: {
    fill: {
      type: String,
      default: "#2CCCFF",
    },
    text: {
      type: [String, Number],
      default: undefined,
    },
    textAfter: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.square {
  width: 38px;
  height: 38px;
  font-size: 14px;
  line-height: 130%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
