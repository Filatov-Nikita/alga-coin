<template>
  <div class="list">
    <button
      v-for="(item, index) in list"
      :key="item.label"
      :style="{ '--theme-primary': themes[theme] }"
      @click="$router.push(item.to)"
      class="list__item"
      :class="[
        { 'list__item--active': isActive(item) },
        ['darkBlue', 'blue', 'default'].includes(theme)
          ? 'tw-text-secondary'
          : 'tw-text-white',
      ]"
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
  methods: {
    isActive(item) {
      const curSection = this.$route.query.section;
      const routeName = this.$route.name;
      const itemSection = item.to.query.section;
      const itemName = item.to.name;
      const itemChildren = item.children;

      if (curSection === itemSection && routeName === itemName) return true;
      if (itemChildren?.includes(routeName)) return true;
      if (
        itemChildren?.some(
          (child) => curSection && child?.section === curSection
        )
      )
        return true;

      return false;
    },
  },
};

function getItems() {
  return [
    {
      label: 'О токене',
      to: { name: 'home', query: { section: 'advantages' } },
    },
    {
      label: 'Фишки проекта',
      to: { name: 'home', query: { section: 'features' } },
    },
    {
      label: 'Экосистема',
      to: { name: 'home', query: { section: 'ecosystem' } },
      children: [{ section: 'eco-start' }],
    },
    {
      label: 'Проекты',
      to: { name: 'home', query: { section: 'projects' } },
      children: ['projects.show'],
    },
    {
      label: 'Новости',
      to: { name: 'home', query: { section: 'news' } },
      children: ['articles.show'],
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
