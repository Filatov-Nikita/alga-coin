<template>
  <div
    @click="select"
    class="
      tw-bg-dark-blue
      tw-rounded-base
      tw-relative
      tw-py-4
      tw-px-5
      tw-flex
      tw-justify-between
      tw-cursor-pointer
    "
  >
    <div class="tw-relative tw-z-10">{{ variant.label }}</div>
    <div class="tw-relative tw-z-10 tw-flex tw-items-center">
      <InlineSvg
        v-if="isSelected"
        class="tw-mr-2-1"
        :src="require('assets/icons/alert-success.svg')"
        width="14px"
        height="14px"
        fill="#005BAA"
      />
      <div>{{ variant.total }}</div>
    </div>
    <div
      v-if="showResult"
      :style="{ width: variant.total }"
      class="
        tw-absolute
        tw-bg-primary
        tw-left-0
        tw-top-0
        tw-h-full
        tw-rounded-l-base
        tw-opacity-30
      "
      :class="{
        ' tw-opacity-100': isWinner,
      }"
    ></div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  props: {
    variant: {
      required: true,
      type: Object,
    },
    initialValue: {
      default: undefined,
    },
    showResult: {
      default: false,
      type: Boolean,
    },
    isWinner: {
      default: false,
      type: Boolean,
    },
  },
  emits: ['update:selected'],
  setup(props, { emit }) {
    const initSel = props.initialValue && props.initialValue.selected;
    const selected = ref(!!initSel);

    const isSelected = computed(() => {
      return selected.value;
    });

    const select = () => {
      if (props.showResult) return;
      selected.value = true;
      emit('update:selected', props.variant);
    };

    return {
      select,
      selected,
      isSelected,
    };
  },
};
</script>

<style>
</style>
