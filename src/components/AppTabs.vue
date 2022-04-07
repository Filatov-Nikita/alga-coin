<template>
  <div class="tabs">
    <button
      v-for="tab in steps"
      :key="tab.name"
      class="tab"
      :class="{ 'tab--active': value === tab.name }"
      @click="change(tab.name)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    steps: {
      required: true,
      type: Array,
    },
    value: {
      required: true,
      type: String,
    },
  },
  emits: ['switch'],
  setup(props, { emit }) {
    const change = (name) => {
      emit('switch', name);
    };

    return {
      change,
    };
  },
};
</script>

<style scoped lang="scss">
//$

.tabs {
  @apply tw-flex tw-rounded-base tw-bg-dark;

  @include screen-xl {
    // max-width: 200px;
    @apply tw-inline-flex;
  }
}

.tab {
  min-width: 150px;
  @apply tw-px-5 tw-py-3 tw-text-center tw-w-1/2 tw-relative tw-text-xxs;

  @include screen-xl {
    @apply tw-text-xs tw-py-4;

    &:hover {
      @apply tw-bg-blue-hover;

      &:first-child {
        @apply tw-rounded-tl-base tw-rounded-bl-base;
      }

      &:last-child {
        @apply tw-rounded-tr-base tw-rounded-br-base;
      }
    }
  }

  &--active {
    @include screen-xl {
      &:hover {
        &::after {
          @apply tw-bg-white;
        }
      }
    }

    &::after {
      content: '';
      height: 2px;
      width: calc(100% - theme('spacing.5') * 2);
      left: 50%;
      transform: translateX(-50%);
      @apply tw-bg-blue-hover tw-block tw-rounded-base tw-absolute tw-bottom-0;
    }
  }
}
</style>
