<template>
  <div
    class="
      tw-bg-dark-blue
      tw-rounded-lg
      tw-min-h-12
      tw-overflow-hidden
      tw-relative
      tw-pl-5
      tw-pr-4
      tw-py-4
      tw-cursor-pointer
    "
  >
    <div
      class="
        tw-flex
        tw-items-center
        tw-justify-between
        tw-w-full
        tw-relative
        tw-z-10
        tw-h-full
        tw-space-x-3
      "
    >
      <div class="tw-text-xxs xl:tw-text-xs">{{ option.body }}</div>
      <div v-if="showResults" class="tw-flex tw-items-center tw-w-28">
        <div class="tw-ml-auto"></div>
        <InlineSvg
          v-if="selected"
          class="tw-mr-3"
          :src="require('assets/icons/alert-success.svg')"
          width="14px"
          height="14px"
          fill="#003870"
        />
        <div>{{ displayPerc }}</div>
      </div>
    </div>

    <div
      v-if="showResults"
      class="tw-h-full tw-absolute tw-left-0 tw-top-0 tw-z-0 tw-bg-primary"
      :class="{ 'tw-bg-opacity-30': !isWinner }"
      :style="{ width: option.perc + '%' }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    selected: {
      default: false,
      type: Boolean,
    },
    option: {
      required: true,
      type: Object,
    },
    isWinner: {
      default: false,
      type: Boolean,
    },
    showResults: {
      default: false,
      type: Boolean,
    },
  },
  computed: {
    displayPerc() {
      return this.option.perc + ' %';
    },
  },
};
</script>

<style>
</style>
