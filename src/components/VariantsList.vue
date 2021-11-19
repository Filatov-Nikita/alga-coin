<template>
  <div class="tw-space-y-4-1">
    <VariantsItem
      v-for="variant in variants"
      :variant="variant"
      :initialValue="initialValue"
      :key="variant.label"
      :selected="selected"
      :showResult="showResult"
      :isWinner="isWinner(variant.label)"
      @update:selected="updateSelect"
    />
  </div>
</template>

<script>
import VariantsItem from './VariantsItem.vue';
import { ref, computed } from 'vue';

export default {
  emits: ['selected'],
  setup(props, { emit }) {
    const initSel = props.initialValue && props.initialValue.selected;
    const selected = ref(initSel || null);
    const initWin = props.initialValue && props.initialValue.winner;
    const winner = ref(initWin || null);

    const updateSelect = (val) => {
      selected.value = val;
      emit('selected', val, (w) => {
        winner.value = w;
      });
    };

    const showResult = computed(() => {
      return !!selected.value;
    });

    const isWinner = (l) => {
      const label = winner.value && winner.value.label;
      return label === l;
    };

    return {
      updateSelect,
      selected,
      showResult,
      winner,
      isWinner,
    };
  },
  props: {
    variants: {
      required: true,
      type: Array,
    },
    initialValue: {
      default: undefined,
    },
  },
  components: {
    VariantsItem,
  },
};
</script>

<style>
</style>
