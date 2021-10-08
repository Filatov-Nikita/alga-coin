<template>
  <div class="timer-item">
    <div class="timer-item__cell">
      <div class="timer-item__number">{{ val }}</div>
      <InlineSvg :src="require('assets/timer-item.svg')" />
    </div>
    <div class="timer-item__label">{{ label }}</div>
  </div>
</template>

<script>
export default {
  props: {
    val: {
      required: true,
      type: [Number, String],
    },
    label: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.timer-item {
  &__cell {
    position: relative;
    margin-bottom: 8px;
  }

  &__number {
    position: absolute;
    line-height: 75px;
    @apply tw-text-md1 tw-text-center tw-w-full;
  }

  &__label {
    @apply tw-text-xs tw-text-center;
  }
}
</style>
