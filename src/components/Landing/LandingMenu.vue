<template>
  <div class="list">
    <button
      @click="to(index)"
      class="list__item"
      :class="[
        { 'list__item--active': activeIndex === index },
        ['darkBlue', 'blue', 'default'].includes(theme)
          ? 'tw-text-secondary'
          : 'tw-text-white',
      ]"
      v-for="(item, index) in list"
      :key="item.label"
      :style="{ '--theme-primary': themes[theme] }"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<script>
import { markRaw, inject } from 'vue';

export default {
  props: {
    activeIndex: {
      default: 0,
      type: Number,
    },
  },
  emits: ['to'],
  setup(props, { emit }) {
    const theme = inject('theme');
    const themes = inject('themes');
    const list = markRaw(getItems());

    const to = (index) => {
      emit('to', index);
    };

    return {
      list,
      to,
      theme,
      themes,
    };
  },
};

function getItems() {
  return [
    {
      label: 'О токене',
    },
    {
      label: 'Фишки проекта',
    },
    {
      label: 'Экосистема',
    },
    {
      label: 'Проекты',
    },
    {
      label: 'Новости',
    },
  ];
}
</script>

<style scoped lang="scss">
//$

.list {
  position: relative;
  z-index: 2000;
  @include row();
  @include gutter-x(1px);

  &__item {
    border-radius: 50px;
    padding: 5px 13px;
    @apply tw-uppercase tw-text-xxs-2;

    &:first-child:not(.list__item--active) {
      margin-left: -13px;
    }

    &--active {
      @apply tw-normal-case tw-text-white tw-text-xxs-1;
      background: var(--theme-primary);
    }
  }
}
</style>
